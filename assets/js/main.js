const socket = io("/");

const JOIN = "join";
const CHAT = "newMessage";
const BROADCAST = "messageNotification";
const SETNICKNAME = "setNickName";

const sendMessage = (message) => {
    console.log(`ME : ${message}`);
    socket.emit(CHAT, { message });
};

const setNickName = (nickName) => {
    socket.emit(SETNICKNAME, { nickName });
};

const handleMessage = (data) => {
    const { message, nickName } = data;
    console.log(`${nickName} : ${message}`);
};

socket.on(BROADCAST, handleMessage);
