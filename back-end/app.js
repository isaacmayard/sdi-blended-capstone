const express = require("express");
const controllers = require("./db/controllers");

const app = express();
const port = 3001;

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(express.json());
app.use(cors(corsOptions));

//ROUTES GO HERE

app.listen(port, () => {
  console.log(`Express Server running on port: ${port}`);
});