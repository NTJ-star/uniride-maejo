"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = require("cors");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket) => {
    console.log(`🟢 User connected: ${socket.id}`);
    socket.on('update_bus_location', (data) => {
        io.emit('bus_location_updated', data);
    });
    socket.on('disconnect', () => {
        console.log(`🔴 User disconnected: ${socket.id}`);
    });
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map