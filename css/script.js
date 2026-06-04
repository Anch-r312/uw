// script.js
const socket = new WebSocket("ws://localhost:8090"); // Replace with your WebSocket server URL
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(e) {
   if (e.key === 'Enter') sendMessage();
});
socket.onmessage = function(event) {
   const chatBox = document.getElementById('chat-box');
   const messageElement = document.createElement('div');
   messageElement.textContent = event.data; // Display received message
   chatBox.appendChild(messageElement);
};
function sendMessage() {
   const input = document.getElementById('chat-input');
   if (input.value.trim() !== "") {
       socket.send(input.value); // Send message to server
       input.value = ""; // Clear input field
   }
}