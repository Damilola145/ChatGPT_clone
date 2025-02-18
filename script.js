import { themeButtonFile } from "./features/darkLight.js";
import { handleOutgoingChat } from "./features/outgoingChat.js";
import { deleteChatButton } from "./features/deleteChat.js";
import { applySavedTheme } from "./features/darkLight.js";

const themeButton = document.querySelector("#theme-btn");
const deleteButton = document.querySelector("#delete-btn");
const sendButton = document.querySelector("#send-btn");

document.addEventListener("DOMContentLoaded", applySavedTheme);

if (sendButton) {
  sendButton.addEventListener("click", handleOutgoingChat);
}

if (themeButton) {
  themeButton.addEventListener("click", themeButtonFile);
};

if (deleteButton) {
  deleteButton.addEventListener("click", deleteChatButton);
};