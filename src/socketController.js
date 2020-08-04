import events from "./events";

const socketController = (socket) => {
    const broadcast = (event, data) => {
        socket.broadcast.emit(event, data);
    };

    socket.on(events.setNickname, ({ LoginNickname }) => {
        socket.nickname = LoginNickname;
        broadcast(events.newUser, { nickname: LoginNickname });
    });
    socket.on(events.disconnet, () => {
        console.log(`${socket.nickname} is left`);
        broadcast(events.disconnected, { nickname: socket.nickname });
    });

    socket.on(events.sendMsg, ({ message }) => {
        broadcast(events.newMsg, { message, nickname: socket.nickname });
    });
};

export default socketController;
