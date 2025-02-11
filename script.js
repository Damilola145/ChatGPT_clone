import { handleOutgoingChat } from "./features/outgoingChat.js";

const sendButton = document.querySelector("#send-btn");

if (sendButton) {
  sendButton.addEventListener("click", handleOutgoingChat);
}
