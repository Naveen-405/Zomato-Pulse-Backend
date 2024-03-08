const express= require("express");
const app= express();
const mongoose= require("mongoose")
require('dotenv').config()
const port= process.env.PORT;
const CORS= require("cors");
app.use(CORS())

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
 .then(()=>{
    console.log(`DataBase is Connected`);
 })
 .catch((err)=>{
    console.log(`Database is Not Connected..`, err);
 })
 
app.use(express.json());
const router= require("./router/router")
app.use("/zomoto",router);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
