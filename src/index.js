const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("../src/routes/hng"))

const port = process.env.PORT || 3900;
app.listen(port, console.log(`Port activated at port ${port}`))