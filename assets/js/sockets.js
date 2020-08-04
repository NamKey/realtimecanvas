import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMsg } from "./chat";

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
};
