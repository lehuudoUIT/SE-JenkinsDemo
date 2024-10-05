const express = require("express");
const sum = require("./sum");

const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  const result = sum(a, b);
  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
