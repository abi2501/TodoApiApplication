import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todoRoute.js";

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

app.use("/api", todoRoutes);

app.get("/", (req, res) => {
  return res.send("TEST");
});

app.listen(port, () => {
  console.log("From backend");
});
