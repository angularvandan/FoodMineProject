import express from "express";//here we need to install @types/express to use in ts
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";
import dotenv from "dotenv";
import { dbConnect } from "./config/database.config";

dotenv.config();
dbConnect();

const app=express();

app.use(express.json());

app.use(cors({//it is used to solve localhost:4200 communicate with 5000
    credentials:true,
    origin:["http://localhost:4200"]//cors tail to use 4200 to request
}));


app.use("/api/foods",foodRouter);
app.use("/api/users",userRouter);
app.use("/api/orders",orderRouter);


const port=5000;

app.listen(port,()=>{
    console.log("Website served on http://localhost:"+port);
});
