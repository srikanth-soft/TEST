// Dependencies
import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

import dbConnect from "./db/connect.js";
import routes from "./routes/index.routes.js";

// Setup App
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8000;
const app = express();

// Middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
// app.use(cors())

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "API working!" });
});
app.use("/api/zupaar", routes);

// Run App
dbConnect();
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
