const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


let mongoURI;
if (process.env.NODE_ENV === "production") {
  mongoURI =
  "mongodb+srv://neerurani1307:%40Neeru1307@neerucluster.z4krrc9.mongodb.net/qkart-practice?retryWrites=true&w=majority";
} else {
  mongoURI = "mongodb://localhost:27017/qkart-practice";
}


mongoose
  .connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
