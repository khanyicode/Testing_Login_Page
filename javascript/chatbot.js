document.addEventListener("DOMContentLoaded", function () {
    const chatBody = document.getElementById('chat-body');
    
    // Array of messages to display one by one with a delay
    const messages = [
        "Hey, I am Salon Serenity chatbot!",
        "How can I assist you today?",
        "Here are a few things I can help with:",
        "1. Help you locate a hairdresser",
        "2. Help you schedule a booking",
        "3. Help you pick services offered by Salon Serenity"
    ];

    let messageIndex = 0;

    // Function to display the messages one by one with a delay
    function displayNextMessage() {
        if (messageIndex < messages.length) {
            displayMessage(messages[messageIndex], 'bot');
            messageIndex++;
            setTimeout(displayNextMessage, 1500); 
        }
    }

    displayNextMessage(); // Start displaying messages
});

function sendMessage() {
    const inputElement = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');
    const userMessage = inputElement.value.trim();

    if (userMessage === "") {
        return; // Prevent sending an empty message
    }

    // Display the user's message
    displayMessage(userMessage, 'user');
    
    // Provide a bot response based on user input
    if (userMessage.toLowerCase().includes("hairdresser")) {
        displayMessage("I can help you find a hairdresser. What location are you looking for?", 'bot');
    } else if (userMessage.toLowerCase().includes("booking")) {
        displayMessage("I can help you schedule a booking. When would you like to book your appointment?", 'bot');
    } else if (userMessage.toLowerCase().includes("services")) {
        displayMessage("I can help you pick services. Here are some of our popular services: Haircut, Hair Color, Hair Treatment. Which one would you like to know more about?", 'bot');
    } else {
        displayMessage("Sorry, I didn't quite catch that. Can you please rephrase?", 'bot');
    }

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    // Clear the input field
    inputElement.value = '';
}

// Function to display messages in the chat window
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    
    if (sender === 'user') {
        messageElement.classList.add('user');
    } else {
        messageElement.classList.add('bot');
    }

    messageElement.textContent = message;
    document.getElementById('chat-body').appendChild(messageElement);
}
