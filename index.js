const express = require("express");
const app = express();
app.use(express.static("static"));
app.listen(1032, () => console.log("App started on port 1032"));