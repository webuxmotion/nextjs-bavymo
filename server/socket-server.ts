import dotenv from 'dotenv';
import { resolve } from 'path';
const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env.development";
dotenv.config({ path: resolve(process.cwd(), envFile) });

import { Server, Socket } from "socket.io";
import { test } from "./test.js";

test();

const PORT = parseInt(process.env.WS_PORT || "3001", 10);

const io = new Server(PORT, {
  cors: { origin: "*" },
});

io.on("connection", (socket: Socket) => {
  console.log("New client connected:", socket.id);

  socket.on("message", (msg: string) => {
    console.log("Received:", msg);
    io.emit("message", msg); // broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

console.log(`Socket.IO server running on port ${PORT}`);