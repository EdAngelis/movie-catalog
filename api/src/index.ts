import express from "express";
import mongoose from "mongoose";
import route from "./route";

const app = express();

app.use(route);

app.get("/", (req, res) => {
  res.status(200).send("Sever is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is runnit on port: ${PORT}`);
});

export default app;
