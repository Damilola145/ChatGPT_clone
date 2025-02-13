import { GoogleGenerativeAI } from "@google/generative-ai";

const chatContainer = document.querySelector(".chat-container");

const API_KEY = "AIzaSyDElkO4jG9A6wjm1-r2SfcBj7GhBCCFJX8";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let messages = {
  history: [],
};

export const getApiResponse = async (userText, typingDiv) => {
  if (!userText) return;

  messages.history.push({ role: "user", parts: [{ text: userText }] });

  try {
    const chat = model.startChat(messages);
    const result = await chat.sendMessage(userText);

    if (!result || !result.response) {
      throw new Error("Invalid response from API");
    }

    const botResponse = await result.response.text();

    messages.history.push({ role: "model", parts: [{ text: botResponse }] });

    console.log("Bot Response:", botResponse);

    if (typingDiv && typingDiv.parentNode) {
      typingDiv.parentNode.removeChild(typingDiv);
    }

    displayBotResponse(botResponse);
  } catch (error) {
    console.error("Error fetching API response:", error);

    if (typingDiv && typingDiv.parentNode) {
      typingDiv.parentNode.removeChild(typingDiv);
    }

    displayBotResponse("Oops! Something went wrong. Please try again.");
  }
};

const displayBotResponse = (botResponse) => {
  const botHtml = `<div class="chat-content">
                     <div class="chat-details">
                       <img src="images/chatbot.jpg" alt="chatbot-img">
                       <p>${botResponse}</p>
                     </div>
                     <span class="material-symbols-rounded">content_copy</span>
                   </div>`;

  const botChatDiv = document.createElement("div");
  botChatDiv.classList.add("chat", "incoming");
  botChatDiv.innerHTML = botHtml;
  chatContainer.appendChild(botChatDiv);
};
