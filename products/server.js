const express = require("express");

const app = express()

app.get("/get", (req, res) => {
    res.status(200).send({"data": "response from product service"});
})


app.listen(4002, ()=> {
    console.log("server started at 4002");
})