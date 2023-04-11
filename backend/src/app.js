import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import uploadRouter from "./routes/upload";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import categoryRouter from "./routes/category";
import multer from "multer";

// config
dotenv.config();
const app = express();
app.use(cors())
// middleware
app.use(express.json());


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept, Authorization"
    )
    res.setHeader("Access-Control-Allow-Methods","GET,POST,DELETE,PATCH");
        next()
})
//router
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
app.use("/api", uploadRouter);



// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/we17309");

export const viteNodeApp = app;
// -> workspace
// -> collection ( thư mục chứa)
// -> request

// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.(.js|.ts) trong thư mục gốc. Copy code từ github của thầy
// B3: Trong file app.js, thêm đoạn code sau:
//     export const viteNodeApp = app;
// B4: trong file package.json, thay đổi đoạn code sau
//      "dev": "concurrently \"vite\" \"json-server --watch db.json --port 3002\""
// B5: npm run dev
