const express = require("express");
const body = require("body-parser");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const dotenv = require("dotenv").config();

const userRouter = require("./router/users");

const corsOptions = {
    origin: "*",
};

app.use(express.json())
app.use(cors(corsOptions));

const { connect, connection } = require("mongoose");

const connectionString =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mood-app";

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection is ok");
});

app.use("/api/users", userRouter);

http
    .listen(3000, console.log("server is runnig on port 3000"))
    .on("error", function (error) {
        console.log("server error ===", error);
    });
