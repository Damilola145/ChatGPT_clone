const chatContainer = document.querySelector(".chat-container");

const createElement = (html, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv;
};

export const showTypingAnimation = () => {
  const html = `<div class="chat-content typing">
                <div class="chat-details">
                    <img src="images/chatbot.jpg" alt="chatbox-img">
                    <div class="typing-animation">
                        <div class="typing-dot" style="--delay:0.2s"></div>
                        <div class="typing-dot" style="--delay:0.3s"></div>
                        <div class="typing-dot" style="--delay:0.4s"></div>
                    </div>
                </div>
            </div>`;

  const typingDiv = createElement(html, "incoming");
  chatContainer.appendChild(typingDiv);

  return typingDiv;
};
