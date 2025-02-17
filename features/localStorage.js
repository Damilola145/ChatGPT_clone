`use strict`;

const chatContainer = document.querySelector(".chat-container");


export const loadDataFromLocalStorage = () => { 
    chatContainer.innerHTML = localStorage.getItem("all-chats");
}



export const localStorageFile = () => {
  localStorage.setItem("all-chats", chatContainer.innerHTML);
};
