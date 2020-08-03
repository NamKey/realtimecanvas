import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;

const JOIN = "join";
const CHAT = "newMessage";
const BROADCAST = "messageNotification";
const SETNICKNAME = "setNickName";

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
    console.log(`Server Running Listening PORT : ${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", (socket) => {
    socket.on(CHAT, ({ message }) => {
        socket.broadcast.emit(BROADCAST, {
            message,
            nickName: socket.nickName || "Anonymous",
        });
    });
    socket.on(SETNICKNAME, ({ nickName }) => {
        socket.nickName = nickName;
    });
});
