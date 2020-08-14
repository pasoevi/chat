"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var uuid_1 = require("uuid");
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var server = http_1.default.createServer(app);
// Pass a http.Server instance to the listen method
var io = require("socket.io").listen(server);
var port = process.env.PORT || 5000;
server.listen(port);
// Registerthe index route of your app that returns the HTML file
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "client", "build", "index.html"));
});
// app.use("static", express.static(path.join(__dirname, "client", "build")));
app.use(express_1.default.static(path_1.default.join(__dirname, "client", "build")));
// Handle connection
io.on("connection", function (socket) {
    console.log("Connected succesfully to the socket ...");
    // Send news on the socket
    socket.emit("user_id", uuid_1.v4());
    socket.on("CLIENT_MESSAGE_SEND", function (data) {
        console.log(data);
        socket.broadcast.emit("SERVER_MESSAGE_BROADCAST", data);
    });

    socket.on("CLIENT_USERNAME_UPDATE", function (data) {
        console.log(data);
    });
});
