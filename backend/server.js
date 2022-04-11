import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// import { RestartProcess } from "concurrently";

dotenv.config();

connectDB();

const app = express();

// app.use((req, res, next) => {
//   console.log("hello joe joe keep it up");
//   next();
// });

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  5000,
  console.log(
    `Server is serving in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
