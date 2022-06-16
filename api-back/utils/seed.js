const Product = require('../models/Product')
const mongoose = require('mongoose')
const Category = require('../models/Category')
const User = require('../models/User')
const axios = require("axios");

mongoose.connect("mongodb://localhost:27017/Six-coffe",{
    useNewUrlParser : true, useUnifiedTopology: true})
    .then(()=>{
        console.log('MONGO CONNECTION')
    })
    .catch((err)=>{
        console.log(err)
    })

const categories = [{categoryName:"Molido"},{categoryName:"Grano"}]
// const superAdmin = [{name:"ADMIN",lastName:"ADMIN",password:"1234",email:"admin@gmail.com",admin:true}]

const products =[
    {
        title: 'Café Molido Tipo Italiano 500g',
        price: 2100,
        category: 'Molido',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155523-1200-auto?v=637463658782630000&width=1200&height=auto&aspect=true',
        description: "Variedad de café molido Tipo Italiano de 500g de Café Martínez. Pack reforzado especialmente para conservar el café.",
    },
    {
        title: 'Café Molido Brasil 500g',
        price: 1950,
        category: 'Molido',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155522-1200-auto?v=637463658780130000&width=1200&height=auto&aspect=true',
        description: "Variedad de café molido Brasil de 500g de Café Martínez. Pack reforzado especialmente para conservar el café.",

    },
    {
        title: 'Café Molido Selecto 500g',
        price: 2300,
        category: 'Molido',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155537-1200-auto?v=637463658821500000&width=1200&height=auto&aspect=true',
        description: "Variedad de café molido Selecto de 500g de Café Martínez. Pack reforzado especialmente para conservar el café.",
    },  
    {
        title: 'Café Molido Moka 500g',
        price: 2100,
        category: 'Molido',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155536-1200-auto?v=637463658819000000&width=1200&height=auto&aspect=true',
        description: "Variedad de café molido Moka de 250g de Café Martínez. Pack reforzado especialmente para conservar el café."
    },
    {
        title: 'Café en Grano Colombia 1kg',
        price: 7380,
        category: 'Grano',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155508-1200-auto?v=637463658737430000&width=1200&height=auto&aspect=true',
        description: "Variedad de café en grano Colombia de 1kg de Café Martínez. Pack reforzado especialmente para conservar el café."
    },
    {
        title: 'Café en Grano Brasil 1kg',
        price: 6030,
        category: 'Grano',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155507-1200-auto?v=637463658733670000&width=1200&height=auto&aspect=true',
        description: "Variedad de café en grano Brasil de 1kg de Café Martínez. Pack reforzado especialmente para conservar el café."
    },
    {
        title: 'Café en Grano Moka 1kg',
        price: 6300,
        category: 'Grano',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155507-1200-auto?v=637463658733670000&width=1200&height=auto&aspect=true',
        description: "Variedad de café en grano Moka de 1kg de Café Martínez. Pack reforzado especialmente para conservar el café."
    },
    {
        title: 'Café en Grano Brasil 1kg',
        price: 6030,
        category: 'Grano',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155510-1200-auto?v=637463658745100000&width=1200&height=auto&aspect=true',
        description: "Variedad de café en grano Brasil de 1kg de Café Martínez. Pack reforzado especialmente para conservar el café."
    },
    {
        title: 'Café en Grano Selecto 1kg',
        price: 6444,
        category: 'Grano',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155506-1200-auto?v=637463658729300000&width=1200&height=auto&aspect=true',
        description: "Variedad de café en grano Selecto de 1kg de Café Martínez. Pack reforzado especialmente para conservar el café."
    },
    {
        title: 'Café en Grano Tipo Italiano 1kg',
        price: 6300,
        category: 'Grano',
        stock: 10,
        image:'https://cafemartinez.vtexassets.com/arquivos/ids/155511-1200-auto?v=637463658748230000&width=1200&height=auto&aspect=true',
        description: "Variedad de café en grano Italiano de 1kg de Café Martínez. Pack reforzado especialmente para conservar el café."}
    ,
]


const seedDb = async () =>{
    await Product.deleteMany()
    await Product.insertMany(products)
    await Category.deleteMany()
    await Category.insertMany(categories);
    await axios.post('http://localhost:3030/user/register',{name:"ADMIN",lastName:"ADMIN",password:"1234",email:"admin@gmail.com",admin:true})
}

seedDb()
