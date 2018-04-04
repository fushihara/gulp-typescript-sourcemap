import * as express from "express";
import { logA, strA } from "./a";
import { logB, strB } from "./sub/b";

console.log("index");
logA();
logB();
const port = 29285;
const app = express();
app.get(`/`, (req: express.Request, res: express.Response) => {
  const a = strA();
  const b = strB();
  res.send("hello world! " + a + "/" + b);
});
app.listen(port, () => { console.log(`express-ready5 localhost:${port}`); });
