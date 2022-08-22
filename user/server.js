const express = require("express");

const app = express()


app.get("/get", (req, res) => {
    res.status(200).send({"data": "response from user service"});
})

app.get("/details/address", (req, res) => {
    res.status(200).send({"data": " address fetched for user"});
})

app.get("/course/computer", (req, res) => {
    res.status(200).send({"course": " computer science"});
})

app.listen(4001, ()=> {
    console.log("server started at 4001");
})