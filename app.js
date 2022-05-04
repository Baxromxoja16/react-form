const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const indexRoutes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://Baxrom:WDK5t6NtUNWngzxe@cluster0.bdcts.mongodb.net/Contact?retryWrites=true&w=majority"
);

app.use("/", indexRoutes);

app.listen(5000, () => {
  console.log("Server started 5000 port");
});
