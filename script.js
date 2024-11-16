// script.js
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
    
    // If there's a message entered by the user
    if (userInput.trim() !== "") {
        // Create user message
        const userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user-message');
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatBox.appendChild(userMessage);
        
        // Clear the input box
        document.getElementById('user-input').value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Bot response (for now, just a simple response)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('chat-message', 'bot-message');
            botMessage.innerHTML = `<p>Thanks for your message: "${userInput}"</p>`;
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}
