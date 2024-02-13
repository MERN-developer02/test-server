const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    console.log("hello")
    res.json({
        name: "subhadip roy",
        code: "292",
    })
})

app.listen(3000, () => {
    console.log("port 3000");
})