import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";


const app= express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.get ('/' , (req, res)=>{
    res.send("<h1>hi bro</h1>");
});

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


mongoose.connect(process.env.URI).
then(()=>{
    console.log(`connected succesfully with server`);
})
.catch((error)=>{
console.log("error" , error);
});


app.listen(process.env.PORT || 8090  , ()=>{
    console.log(`server is running on port ${process.env.PORT}` );
});