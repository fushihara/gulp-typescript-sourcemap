"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const a_1 = require("./a");
const b_1 = require("./sub/b");
console.log("index");
a_1.logA();
b_1.logB();
const port = 29285;
const app = express();
app.get(`/`, (req, res) => {
    const a = a_1.strA();
    const b = b_1.strB();
    res.send("hello world! " + a + "/" + b);
});
app.listen(port, () => { console.log(`express-ready5 localhost:${port}`); });

//# sourceMappingURL=index.js.map
