const express = require("express");
const body = require("body-parser");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const dotenv = require("dotenv").config();

const userRouter = require("./router/users");
const thoughtsRouter = require("./router/thoughts")

const corsOptions = {
    origin: "*",
};

app.use(express.json())
app.use(cors(corsOptions));

const { connect, connection } = require("mongoose");

const connectionString =
    process.env.MONGODB_URI;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection is ok");
});

app.use("/api/users", userRouter);
app.use("/api/thoughts", thoughtsRouter);

http
    .listen(process.env.SERVER_PORT, console.log("server is runnig on port ", process.env.SERVER_PORT))
    .on("error", function (error) {
        console.log("server error ===", error);
    });
