const chatInput = document.querySelector("#chat-input");
const chatContainer = document.querySelector(".chat-container");
import { getApiResponse } from "./generatingApi.js";
import { loadDataFromLocalStorage, localStorageFile } from "./localStorage.js";
import { showTypingAnimation } from "./typingDots.js";


loadDataFromLocalStorage(chatContainer);

const createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv;
};


export const handleOutgoingChat = () => {
  if (!chatInput) return;

  const userText = chatInput.value.trim();
  if (userText === "") return;

  const html = `<div class="chat-content">
                <div class="chat-details">
                    <img src="images/user.jpg" alt="user-img">
                    <p>${userText}</p>
                </div>
            </div>`;

  const outgoingChatDiv = createElement(html, "outgoing");
  chatContainer.appendChild(outgoingChatDiv);
  const typingDiv = showTypingAnimation();
  getApiResponse(userText, typingDiv);
  localStorageFile();

};


