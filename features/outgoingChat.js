const chatInput = document.querySelector("#chat-input");
const chatContainer = document.querySelector(".chat-container");

let userText = null;

const createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv;
};

export const handleOutgoingChat = () => {
  if (!chatInput) return;

  userText = chatInput.value.trim();
  if (userText === "") return;

  const html = `<div class="chat-content">
                <div class="chat-details">
                    <img src="images/user.jpg" alt="user-img">
                    <p>${userText}</p>
                </div>
            </div>`;

  const outgoingChatDiv = createElement(html, "outgoing");
  chatContainer.appendChild(outgoingChatDiv);
};
