const { initSocket } = require("./sockets");

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem("nickname");

const logIn = (LoginNickname) => {
    const socket = io("/");
    socket.emit(window.events.setNickname, { LoginNickname });
    initSocket(socket);
};

const handleFormsubmit = (event) => {
    event.preventDefault();
    const input = loginForm.querySelector("input");
    const { value: nickName } = input;
    input.value = "";
    // console.log(input.value);
    localStorage.setItem(NICKNAME, nickName);
    body.className = LOGGED_IN;
    logIn(nickName);
};

if (loginForm) {
    loginForm.addEventListener("submit", handleFormsubmit);
}

if (nickname === null) {
    body.className = LOGGED_OUT;
} else {
    body.className = LOGGED_IN;
    logIn(nickname);
}
