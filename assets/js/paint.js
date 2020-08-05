import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const mode = document.getElementById("jsMode");
const controls = document.getElementById("jsControls");

// In HTML, We must provide height,width
const CANVAS_SIZE = 700;
const INITIAL_COLOR = "#000000";

context.width = CANVAS_SIZE;
context.height = CANVAS_SIZE;
context.fillStyle = "whitesmoke";
context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

context.strokeStyle = INITIAL_COLOR;
context.fillStyle = INITIAL_COLOR;

context.lineWidth = 2.5;

let painting = false;
let filling = false;

const handleCM = (event) => {
    event.preventDefault();
};

const fill = (color = null) => {
    let currentColor = context.fillStyle;
    if (color !== null) {
        context.fillStyle = color;
    }
    context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    context.fillStyle = currentColor;
};

const handleCanvasClick = () => {
    if (filling) {
        fill();
        getSocket().emit(window.events.fill, { color: context.fillStyle });
    }
};

const handleModeClick = () => {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
};

const handleClickColor = (event) => {
    const color = event.target.style.backgroundColor;
    context.strokeStyle = color;
    context.fillStyle = color;
};

const startPainting = () => {
    painting = true;
};

const stopPainting = () => {
    painting = false;
};

const beginPath = (x, y) => {
    context.beginPath();
    context.moveTo(x, y);
};

const strokePath = (x, y, color = null) => {
    let currentColor = context.strokeStyle;
    if (color !== null) {
        context.strokeStyle = color;
    }
    context.lineTo(x, y);
    context.stroke();
    context.strokeStyle = currentColor;
};

const onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        beginPath(x, y);
        getSocket().emit(window.events.beginPath, { x, y });
    } else {
        strokePath(x, y);
        getSocket().emit(window.events.strokePath, {
            x,
            y,
            color: context.strokeStyle,
        });
    }
};

if (colors) {
    Array.from(colors).forEach((color) =>
        color.addEventListener("click", handleClickColor)
    );
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y, color }) => strokePath(x, y, color);
export const handleFilled = ({ color }) => fill(color);

export const hideCanvasControls = () => {
    controls.style.display = "none";
};

export const showCanvasControls = () => {
    controls.style.display = "flex";
};

export const resetCanvas = () => {
    fill("whitesmoke");
};

export const disableCanvas = () => {
    canvas.removeEventListener("mousemove", onMouseMove);
    canvas.removeEventListener("mousedown", startPainting);
    canvas.removeEventListener("mouseup", stopPainting);
    canvas.removeEventListener("mouseleave", stopPainting);
    canvas.removeEventListener("click", handleCanvasClick);
};

export const enableCanvas = () => {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
};

if (canvas) {
    canvas.addEventListener("contextmenu", handleCM);
}
