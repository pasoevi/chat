import http from "http";
import cors from "cors";
import { v4 } from "uuid";
import path from "path";
import express from "express";
const app = express();

const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
const port = process.env.PORT || 5000;
server.listen(port);

app.get("/", function (req: any, res: any) {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

io.on("connection", function (socket: any) {
    console.log("Connected successfully to the socket ...");

    // Send news on the socket
    socket.emit("user_id", v4());

    socket.on("CLIENT_MESSAGE_SEND", function (data: any) {
        console.log(data);
        socket.broadcast.emit("SERVER_MESSAGE_BROADCAST", data);
    });
});
