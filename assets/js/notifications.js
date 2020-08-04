const body = document.querySelector("body");

const fireNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = text;
    notification.style.backgroundColor = color;

    body.appendChild(notification);
};

// eslint-disable-next-line import/prefer-default-export
export const handleNewUser = ({ nickname }) => {
    fireNotification(`Welcome! Player : ${nickname}`, "rgb(88, 86, 214)");
    // console.log(`Welcome! Player : ${nickName}`);
};

export const handleDisconnected = ({ nickname }) => {
    fireNotification(`Player : ${nickname} is left`, "rgb(255, 149, 0)");
};
