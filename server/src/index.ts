import http from "http";
import { v4 } from "uuid";
import path from "path";
import express from "express";
const app = express();

const server = http.createServer(app);
// Pass a http.Server instance to the listen method
const io = require("socket.io").listen(server);
server.listen(80);

app.use("/static", express.static(path.join(__dirname, "public/static")));

// Register the index route of your app that returns the HTML file
app.get("/", function (req: express.Requrest, res: express.Response) {
    res.sendFile(__dirname + "/public/index.html");
});
// Handle connection
io.on("connection", function (socket: any) {
    console.log("Connected succesfully to the socket ...");

    // Send news on the socket
    socket.emit("user_id", v4());

    socket.on("CLIENT_MESSAGE_SEND", function (data: any) {
        console.log(data);
        socket.broadcast.emit("SERVER_MESSAGE_BROADCAST", data);
    });
});
