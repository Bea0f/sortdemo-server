const express = require("express");
const cors = require("cors");
const {check} = require("express-validator");
const migrationhelper = require("./migrationhelper");
const app = express();
const port = 3000;
const {Op} = require("sequelize");

const {Product} = require("./models");

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))

//Search
app.get("")



//Get all
app.get("/products", check("q").escape(), async (req,res) => {
    //console.log(req.query.sortCol);
    //console.log(req.query.sortOrder);
    const sortCol = req.query.sortCol || "id";
    const sortOrder = req.query.sortOrder || "asc";
    const q = req.query.q || "";
    const offset = Number(req.query.offset || 0 );
    const limit = Number(req.query.limit || 20);

    const allProducts = await Product.findAll({
        where: {
            name:{
                [Op.like]: "%" + q + "%"
            }
        },
        order:[
            [sortCol, sortOrder]
        ],
        offset: offset,
        limit: limit,
    });
    let result = allProducts.map(p => {
        return{
            id:p.id,
            name:p.name,
            unitPrice:p.unitPrice,
            stockLevel:p.stockLevel,
        }
    })
    return res.json(result);
})
//Get one
/* app.get("/products(:id", async (req,res) => {
    const product = await Product.findOne( {where: {id:} })
    let result = allProducts.map(p => {
        return{
            id:p.id,
            name:p.name,
            unitPrice:p.unitPrice,
            stockLevel:p.stockLevel,
        }
    })
    return res.json(result);
}) */

app.listen(port, async () => {
    await migrationhelper.migrate();
    console.log(`Example app listening on port ${port}`);
})
