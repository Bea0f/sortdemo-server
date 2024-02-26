const express = require("express");
const cors = require("cors");
const {check} = require("express-validator");
const migrationhelper = require("./migrationhelper");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))

app.get("/products", async (req,res) => {
    
})

app.listen(port, async () => {
    await migrationhelper.migrate();
    console.log(`Example app listening on port ${port}`);
})
