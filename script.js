const chatBody = document.getElementById("chatBody");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

// Simple chatbot responses
const botResponses = {
  "hi": "hello!",
  "hello": "hi there!",
  "how are you": "I'm good, how about you?",
  "i am fine": "Glad to hear that!",
  "what is your name": "I'm ChatBot!",
  "bye": "Goodbye! Have a great day!",
  "thank you": "You're welcome!",
  "who are you": "I'm a simple chat bot made with JavaScript!",
  "what can you do": "I can chat with you 🙂"
};

sendBtn.addEventListener("click", () => {
  const message = messageInput.value.trim().toLowerCase();
  if (message) {
    appendMessage(message, "sent");

    // Get matching response
    const reply = getBotReply(message);
    setTimeout(() => appendMessage(reply, "received"), 800);

    messageInput.value = "";
  }
});

function appendMessage(text, type) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  messageElement.innerText = text;
  chatBody.appendChild(messageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(msg) {
  return botResponses[msg] || "Sorry, I didn't understand that.";
}
