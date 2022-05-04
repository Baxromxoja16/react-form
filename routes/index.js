const express = require("express");
const routes = express();
const mongoose = require("mongoose");
const contactSchema = require("../react-form/model/contact");

const Contact = mongoose.model("Contact", contactSchema);

routes.get("/", (req, res) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json(err));
});

routes.post("/newContact", (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    descr: req.body.descr,
    number: req.body.number,
  });
  newContact
    .save()
    .then((contact) => console.log(contact))
    .catch((err) => res.status(400).json(err));
});

module.exports = routes;
