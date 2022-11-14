import "dotenv/config";
import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.SERVER_PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
