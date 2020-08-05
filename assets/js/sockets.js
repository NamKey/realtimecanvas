import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMsg } from "./chat";
import { handleBeganPath, handleStrokedPath, handleFilled } from "./paint";
import {
    handlePlayerUpdate,
    handleGameStarted,
    handleLeaderNotification,
    handleGameEnded,
    handleGameStarting,
} from "./players";

let socket;

export const getSocket = () => socket;

export const updateSocket = (windowSocket) => {
    socket = windowSocket;
    return socket;
};

export const initSocket = (aSocket) => {
    const { events } = window;
    updateSocket(aSocket);
    aSocket.on(events.newUser, handleNewUser);
    aSocket.on(events.disconnected, handleDisconnected);
    aSocket.on(events.newMsg, handleNewMsg);
    aSocket.on(events.beganPath, handleBeganPath);
    aSocket.on(events.strokedPath, handleStrokedPath);
    aSocket.on(events.filled, handleFilled);
    aSocket.on(events.playerUpdate, handlePlayerUpdate);
    aSocket.on(events.gameStarted, handleGameStarted);
    aSocket.on(events.leaderNotification, handleLeaderNotification);
    aSocket.on(events.gameEnded, handleGameEnded);
    aSocket.on(events.gameStarting, handleGameStarting);
};
