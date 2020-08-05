import events from "./events";
import { chooseWord } from "./words";

let sockets = [];
let inProgress = false;
let word = null;
let leader = null;
let timeout = null;

const chooseLeader = () => {
    return sockets[Math.floor(Math.random() * sockets.length)];
};

const socketController = (socket, io) => {
    const broadcast = (event, data) => {
        socket.broadcast.emit(event, data);
    };
    const superBroadcast = (event, data) => {
        io.emit(event, data);
    };
    const sendPlayerUpdate = () =>
        superBroadcast(events.playerUpdate, { sockets });

    const endGame = () => {
        inProgress = false;
        superBroadcast(events.gameEnded);
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        setTimeout(() => startGame(), 2000);
    };

    const startGame = () => {
        if (sockets.length > 1) {
            if (!inProgress) {
                inProgress = true;
                leader = chooseLeader();
                word = chooseWord();
                superBroadcast(events.gameStarting);
                setTimeout(() => {
                    superBroadcast(events.gameStarted);
                    io.to(leader.id).emit(events.leaderNotification, { word });
                    timeout = setTimeout(endGame, 30000);
                }, 5000);
            }
        }
    };

    const addPoint = (id) => {
        sockets = sockets.map((socket) => {
            if (socket.id === id) {
                socket.point += 10;
            }
            return socket;
        });
        sendPlayerUpdate();
        endGame();
        clearTimeout(timeout);
    };
    socket.on(events.setNickname, ({ LoginNickname }) => {
        socket.nickname = LoginNickname;
        sockets.push({ id: socket.id, point: 0, nickname: LoginNickname });
        broadcast(events.newUser, { nickname: LoginNickname });
        sendPlayerUpdate();
        startGame();
    });
    socket.on(events.disconnet, () => {
        sockets = sockets.filter((aSocket) => aSocket.id !== socket.id);
        if (sockets.length === 1) {
            endGame();
        } else if (leader) {
            if (leader.id === socket.id) endGame();
        }
        console.log(`${socket.nickname} is left`);
        broadcast(events.disconnected, { nickname: socket.nickname });
        sendPlayerUpdate();
    });

    socket.on(events.sendMsg, ({ message }) => {
        if (message === word) {
            superBroadcast(events.newMsg, {
                message: `Winner is ${socket.nickname}, Answer is ${word}`,
                nickname: "Bot",
            });
            addPoint(socket.id);
        } else {
            broadcast(events.newMsg, { message, nickname: socket.nickname });
        }
    });

    socket.on(events.beginPath, ({ x, y }) => {
        broadcast(events.beganPath, { x, y });
    });

    socket.on(events.strokePath, ({ x, y, color }) => {
        broadcast(events.strokedPath, { x, y, color });
    });

    socket.on(events.fill, ({ color }) => broadcast(events.filled, { color }));
};

export default socketController;
