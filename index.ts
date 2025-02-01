import express, { Express, Request, Response } from "express";
import { Router } from "express";

import { zxcvbn } from "@zxcvbn-ts/core";
import init from "./password/zxcvbn_init";

const app: Express = express();
const router = Router();
app.use(express.json());

init();

router.post("/password/check", (req: Request, res: Response) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }
  const result = zxcvbn(password);
  res.json(result);
});

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
