import {
    disableCanvas,
    hideCanvasControls,
    enableCanvas,
    showCanvasControls,
    resetCanvas,
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotification");
const addPlayers = (players) => {
    board.innerHTML = "";
    players.forEach((player) => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname}: ${player.point}`;
        board.appendChild(playerElement);
    });
};

const setNotifs = (text) => {
    notifs.innerText = "";
    notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
    setNotifs("");
    disableCanvas();
    enableChat();
    hideCanvasControls();
};
export const handleLeaderNotification = ({ word }) => {
    enableCanvas();
    showCanvasControls();
    disableChat();
    setNotifs("");
    setNotifs(`You are painter, PAINT : ${word}`);
};

export const handleGameEnded = () => {
    setNotifs("Game Ended.");
    disableCanvas();
    hideCanvasControls();
    resetCanvas();
};

export const handleGameStarting = () => {
    setNotifs("Game will start soon");
};
