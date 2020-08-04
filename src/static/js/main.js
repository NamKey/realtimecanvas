(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMsg = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "Me", ":</span> ").concat(text);
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
}; // eslint-disable-next-line import/prefer-default-export


var handleNewMsg = function handleNewMsg(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  appendMsg(message, nickname);
};

exports.handleNewMsg = handleNewMsg;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TXNnIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQ2xDLE1BQU1DLEVBQUUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUQsRUFBQUEsRUFBRSxDQUFDRSxTQUFILDRDQUMwQkgsUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUQ3QyxnQkFFSUEsUUFBUSxHQUFHQSxRQUFILEdBQWMsSUFGMUIsc0JBR1lELElBSFo7QUFJQUwsRUFBQUEsUUFBUSxDQUFDVSxXQUFULENBQXFCSCxFQUFyQjtBQUNILENBUEQ7O0FBU0EsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDN0JBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFGNkIsTUFHckJDLEtBSHFCLEdBR1hGLEtBSFcsQ0FHckJFLEtBSHFCO0FBSTdCLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUVpQixJQUFBQSxPQUFPLEVBQUVKO0FBQVgsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNILENBUEQsQyxDQVNBOzs7QUFDTyxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEyQjtBQUFBLE1BQXhCRCxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmZCxRQUFlLFFBQWZBLFFBQWU7QUFDbkRGLEVBQUFBLFNBQVMsQ0FBQ2dCLE9BQUQsRUFBVWQsUUFBVixDQUFUO0FBQ0gsQ0FGTTs7OztBQUlQLElBQUlILE9BQUosRUFBYTtBQUNUQSxFQUFBQSxPQUFPLENBQUNtQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1gsYUFBbkM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xyXG5jb25zdCBzZW5kTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1NlbmRNc2dcIik7XHJcblxyXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+JHtcclxuICAgICAgICBuaWNrbmFtZSA/IG5pY2tuYW1lIDogXCJNZVwiXHJcbiAgICB9Ojwvc3Bhbj4gJHt0ZXh0fWA7XHJcbiAgICBtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVTZW5kTXNnID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHsgbWVzc2FnZTogdmFsdWUgfSk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBhcHBlbmRNc2codmFsdWUpO1xyXG59O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01zZyA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+IHtcclxuICAgIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XHJcbn07XHJcblxyXG5pZiAoc2VuZE1zZykge1xyXG4gICAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xyXG59XHJcbiJdfQ==
},{"./sockets":5}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTE0YjEzM2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vY2hhdFwiO1xyXG4iXX0=
},{"./chat":1,"./login":3,"./sockets":5}],3:[function(require,module,exports){
"use strict";

var _require = require("./sockets"),
    initSocket = _require.initSocket;

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem("nickname");

var logIn = function logIn(LoginNickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    LoginNickname: LoginNickname
  });
  initSocket(socket);
};

var handleFormsubmit = function handleFormsubmit(event) {
  event.preventDefault();
  var input = loginForm.querySelector("input");
  var nickName = input.value;
  input.value = ""; // console.log(input.value);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0U29ja2V0IiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiTklDS05BTUUiLCJMT0dHRURfT1VUIiwiTE9HR0VEX0lOIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9nSW4iLCJMb2dpbk5pY2tuYW1lIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJoYW5kbGVGb3Jtc3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Iiwibmlja05hbWUiLCJ2YWx1ZSIsInNldEl0ZW0iLCJjbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztlQUF1QkEsT0FBTyxDQUFDLFdBQUQsQztJQUF0QkMsVSxZQUFBQSxVOztBQUVSLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLGFBQUQsRUFBbUI7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVOLElBQUFBLGFBQWEsRUFBYkE7QUFBRixHQUF2QztBQUNBYixFQUFBQSxVQUFVLENBQUNjLE1BQUQsQ0FBVjtBQUNILENBSkQ7O0FBTUEsSUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDaENBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRmdDLE1BR2pCcUIsUUFIaUIsR0FHSkQsS0FISSxDQUd4QkUsS0FId0I7QUFJaENGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQsQ0FKZ0MsQ0FLaEM7O0FBQ0FmLEVBQUFBLFlBQVksQ0FBQ2dCLE9BQWIsQ0FBcUJwQixRQUFyQixFQUErQmtCLFFBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUMwQixTQUFMLEdBQWlCbkIsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxRQUFELENBQUw7QUFDSCxDQVREOztBQVdBLElBQUlwQixTQUFKLEVBQWU7QUFDWEEsRUFBQUEsU0FBUyxDQUFDd0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNSLGdCQUFyQztBQUNIOztBQUVELElBQUlYLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQlIsRUFBQUEsSUFBSSxDQUFDMEIsU0FBTCxHQUFpQnBCLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hOLEVBQUFBLElBQUksQ0FBQzBCLFNBQUwsR0FBaUJuQixTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbml0U29ja2V0IH0gPSByZXF1aXJlKFwiLi9zb2NrZXRzXCIpO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XHJcblxyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuXHJcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuaWNrbmFtZVwiKTtcclxuXHJcbmNvbnN0IGxvZ0luID0gKExvZ2luTmlja25hbWUpID0+IHtcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuICAgIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgTG9naW5OaWNrbmFtZSB9KTtcclxuICAgIGluaXRTb2NrZXQoc29ja2V0KTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUZvcm1zdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCB7IHZhbHVlOiBuaWNrTmFtZSB9ID0gaW5wdXQ7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgbmlja05hbWUpO1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgICBsb2dJbihuaWNrTmFtZSk7XHJcbn07XHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3Jtc3VibWl0KTtcclxufVxyXG5cclxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn0gZWxzZSB7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIGxvZ0luKG5pY2tuYW1lKTtcclxufVxyXG4iXX0=
},{"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.className = "notification";
  notification.innerText = text;
  notification.style.backgroundColor = color;
  body.appendChild(notification);
}; // eslint-disable-next-line import/prefer-default-export


var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("Welcome! Player : ".concat(nickname), "rgb(88, 86, 214)"); // console.log(`Welcome! Player : ${nickName}`);
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("Player : ".concat(nickname, " is left"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN0QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUIsY0FBekI7QUFDQUYsRUFBQUEsWUFBWSxDQUFDRyxTQUFiLEdBQXlCTCxJQUF6QjtBQUNBRSxFQUFBQSxZQUFZLENBQUNJLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDTixLQUFyQztBQUVBTCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0gsQ0FQRCxDLENBU0E7OztBQUNPLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDM0NYLEVBQUFBLGdCQUFnQiw2QkFBc0JXLFFBQXRCLEdBQWtDLGtCQUFsQyxDQUFoQixDQUQyQyxDQUUzQztBQUNILENBSE07Ozs7QUFLQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFFBQWtCO0FBQUEsTUFBZkQsUUFBZSxTQUFmQSxRQUFlO0FBQ2hEWCxFQUFBQSxnQkFBZ0Isb0JBQWFXLFFBQWIsZUFBaUMsa0JBQWpDLENBQWhCO0FBQ0gsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gXCJub3RpZmljYXRpb25cIjtcclxuICAgIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG5cclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT4ge1xyXG4gICAgZmlyZU5vdGlmaWNhdGlvbihgV2VsY29tZSEgUGxheWVyIDogJHtuaWNrbmFtZX1gLCBcInJnYig4OCwgODYsIDIxNClcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgV2VsY29tZSEgUGxheWVyIDogJHtuaWNrTmFtZX1gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWQgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XHJcbiAgICBmaXJlTm90aWZpY2F0aW9uKGBQbGF5ZXIgOiAke25pY2tuYW1lfSBpcyBsZWZ0YCwgXCJyZ2IoMjU1LCAxNDksIDApXCIpO1xyXG59O1xyXG4iXX0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var socket;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(windowSocket) {
  socket = windowSocket;
  return socket;
};

exports.updateSocket = updateSocket;

var initSocket = function initSocket(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
  aSocket.on(events.newMsg, _chat.handleNewMsg);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0Iiwid2luZG93U29ja2V0IiwiaW5pdFNvY2tldCIsImFTb2NrZXQiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIiwiZGlzY29ubmVjdGVkIiwiaGFuZGxlRGlzY29ubmVjdGVkIiwibmV3TXNnIiwiaGFuZGxlTmV3TXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBSUEsTUFBSjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFlBQUQsRUFBa0I7QUFDMUNILEVBQUFBLE1BQU0sR0FBR0csWUFBVDtBQUNBLFNBQU9ILE1BQVA7QUFDSCxDQUhNOzs7O0FBS0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQUEsZ0JBQ2hCQyxNQURnQjtBQUFBLE1BQzNCQyxNQUQyQixXQUMzQkEsTUFEMkI7QUFFbkNMLEVBQUFBLFlBQVksQ0FBQ0csT0FBRCxDQUFaO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0csRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQyw0QkFBM0I7QUFDQUwsRUFBQUEsT0FBTyxDQUFDRyxFQUFSLENBQVdELE1BQU0sQ0FBQ0ksWUFBbEIsRUFBZ0NDLGlDQUFoQztBQUNBUCxFQUFBQSxPQUFPLENBQUNHLEVBQVIsQ0FBV0QsTUFBTSxDQUFDTSxNQUFsQixFQUEwQkMsa0JBQTFCO0FBQ0gsQ0FOTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld1VzZXIsIGhhbmRsZURpc2Nvbm5lY3RlZCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgaGFuZGxlTmV3TXNnIH0gZnJvbSBcIi4vY2hhdFwiO1xyXG5cclxubGV0IHNvY2tldDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU29ja2V0ID0gKHdpbmRvd1NvY2tldCkgPT4ge1xyXG4gICAgc29ja2V0ID0gd2luZG93U29ja2V0O1xyXG4gICAgcmV0dXJuIHNvY2tldDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0ID0gKGFTb2NrZXQpID0+IHtcclxuICAgIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XHJcbiAgICB1cGRhdGVTb2NrZXQoYVNvY2tldCk7XHJcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcclxuICAgIGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcclxuICAgIGFTb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TXNnKTtcclxufTtcclxuIl19
},{"./chat":1,"./notifications":4}]},{},[2])