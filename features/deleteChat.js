"use strict";
import { loadDataFromLocalStorage } from "./localStorage.js";

export const deleteChatButton = () => {
  if (confirm("Are you sure you want to clear all the chats?")) {
    localStorage.removeItem("all-chats");
    loadDataFromLocalStorage(document.querySelector(".chat-container"));
  }
};

