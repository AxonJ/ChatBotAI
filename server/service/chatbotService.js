class ChatbotService {
    async getResponse(input) {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) return 'Hello there! How can I assist you today?';
        else if (lowerInput.includes('how are you')) return "I'm just a bunch of code, but I'm doing great! How about you?";
        else if (lowerInput.includes('your name')) return "I'm ChatbotAI, your friendly coding companion!";
        else if (lowerInput.includes('bye')) return 'Goodbye! Have a great day!';
        else return "I'm not sure how to respond to that, but I'm always learning!";
    }
}

module.exports = new ChatbotService();
