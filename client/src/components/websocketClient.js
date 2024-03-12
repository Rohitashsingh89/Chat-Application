// websocketClient.js
import { WebSocket } from 'ws';

const connectWebSocket = () => {
  const socket = new WebSocket('ws://localhost:8080/');
  return socket;
};

export default connectWebSocket;


// const socket = new WebSocket('ws://localhost:8080'); // Replace 'localhost:8080' with your WebSocket server URL

// // WebSocket open event handler
// socket.onopen = () => {
//   console.log('WebSocket connection established.');
// };

// // WebSocket message event handler
// socket.onmessage = (event) => {
//   const message = event.data;
//   console.log('Received message:', message);
// };

// // WebSocket close event handler
// socket.onclose = () => {
//   console.log('WebSocket connection closed.');
// };

// // WebSocket error event handler
// socket.onerror = (error) => {
//   console.error('WebSocket error:', error);
// };

// // Sending a message
// const messageToSend = 'Hello, WebSocket server!';
// socket.send(messageToSend);
