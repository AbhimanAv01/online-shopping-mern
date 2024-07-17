const express = require("express");
const mongoose = require("mongoose");
const cros = require("cors");
const app = express();
var bodyParser = require('body-parser')


var corsOptions = {
    origin: "*",
  };
  app.use(cros(corsOptions));
  app.use(bodyParser.json()); 

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/Mani_Project_IMR");

const toplaptop = require("../Server/app/router/Toplaptop.router");
app.use("/api", toplaptop);

const topmobile= require("../Server/app/router/Topmobile.router");
app.use("/api", topmobile);

const laptop=require("../Server/app/router/Laptop.router");
app.use("/api",laptop);

const Mobile =require("../Server/app/router/Mobile.router");
app.use("/api",Mobile);

const cart =require("../Server/app/router/Cart.router");
app.use("/api",cart);

const payment =require("../Server/app/router/Payment.router");
app.use("/api",payment);

const user =require("../Server/app/router/User.router");
app.use("/api",user);

const mail =require("../Server/app/mail/mailer");
app.use("/api",mail);

const tv =require("../Server/app/router/Tv.router");
app.use("/api",tv);

const order =require("../Server/app/router/Order.router");
app.use("/api",order);

const headphone =require("../Server/app/router/Headphone.router");
app.use("/api",headphone);

const monitor =require("../Server/app/router/Monitor.router");
app.use("/api",monitor);

const mouse =require("../Server/app/router/Mouse.router");
app.use("/api",mouse);


app.get("/", (req, res) => {
  res.json({ msg: "welcome to my app" });
});

app.listen(3010, () => {
  console.log("Server is Running on port 3010");
});
