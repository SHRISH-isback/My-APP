const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
  { id: 3, name: "Item Three" },
];

app.get("/api/items", (req, res) => {
  res.json(items);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
