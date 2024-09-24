const WebSocket = require("ws");
const http = require("http");

// Create HTTP Server
const server = http.createServer();

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Array to keep track of connected clients
const clients = [];

wss.on("connection", (ws) => {
  console.log("New client connected");
  clients.push(ws);

  // On receiving a message from the client
  ws.on("message", (message) => {
    console.log("received: %s", message);
  });

  // On WebSocket close
  ws.on("close", () => {
    console.log("Client disconnected");
    const index = clients.indexOf(ws);
    if (index > -1) {
      clients.splice(index, 1);
    }
  });
});

// Broadcast function to send messages to all clients
function broadcast(data) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

// This function can be called when new notifications are added
function newNotification(notificationData) {
  broadcast(notificationData); // Broadcast to all clients
}

// Start the server on port 8080 (or any preferred port)
server.listen(8080, () => {
  console.log("WebSocket server is running on ws://localhost:8080");
});

module.exports = { newNotification };
