const express= require("express");
const app= express();
const mongoose= require("mongoose")
const port=5000;
const CORS= require("cors");
app.use(CORS())

mongoose.connect("mongodb+srv://naveen_7:naveen77@cluster0.p5eplyq.mongodb.net/",{useNewUrlParser:true})
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
