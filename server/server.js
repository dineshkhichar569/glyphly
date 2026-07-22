import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connnectDB from "./src/config/mongoose-conection.js";
import errorHandler from "./src/middlewares/errorHandler.middleware.js";

//////////////// //!  Routes  ///////////////////
//? card.routes.js gets imported here once we build it


dotenv.config();
connnectDB();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World !");
})


//! Routes
//? app.use("/api", cardRouter);  -> added in a later step


//! at last to handle errors
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});