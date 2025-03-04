require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const contactRoutes = require("./routes/contactRoutes");

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json())
app.use("/api/v1/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
