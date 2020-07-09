const express = require("express");
const mongoose = require("mongoose");

require("dotenv/config");
const app = express();
const bodyParser = require("body-parser");

const postsRoute = require("./routes/students");
app.use(bodyParser.json());
app.use("/v1/api/students", postsRoute);

app.get("/", (req, res) => {
    res.send("we are on home");
});
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },

    () => console.log("connected to db")
);




app.listen(3000);