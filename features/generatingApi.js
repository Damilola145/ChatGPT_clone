import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadDataFromLocalStorage, localStorageFile } from "./localStorage.js";


const chatContainer = document.querySelector(".chat-container");


const API_KEY = "AIzaSyDElkO4jG9A6wjm1-r2SfcBj7GhBCCFJX8";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


let messages = {
  history: [],
};

const stripMarkdown = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/~~(.*?)~~/g, "$1")
    .replace(/`{1,3}([^`]+)`{1,3}/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/^(\d+)\.\s+/gm, "$1. ")
    .replace(/^[-+*]\s+/gm, "- ");
};

const copyResponse = (copyBtn) => {
  // Copies the text content of the response to the clipboard
  const responseTextElement = copyBtn.parentElement.querySelector("p");
  if (responseTextElement) {
    navigator.clipboard.writeText(responseTextElement.textContent);
    copyBtn.textContent = "done";
    setTimeout(() => (copyBtn.textContent = "content_copy"), 1000);
  }
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

    const cleanedResponse = stripMarkdown(botResponse);

    if (typingDiv && typingDiv.parentNode) {
      typingDiv.parentNode.removeChild(typingDiv);
    }

    displayBotResponse(cleanedResponse);
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
                     <span class="material-symbols-rounded copy-btn">content_copy</span>
                   </div>`;

  const botChatDiv = document.createElement("div");
  botChatDiv.classList.add("chat", "incoming");
  botChatDiv.innerHTML = botHtml;
  chatContainer.appendChild(botChatDiv);
  localStorageFile();

  const copyBtn = botChatDiv.querySelector(".copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => copyResponse(copyBtn));
  }
};
