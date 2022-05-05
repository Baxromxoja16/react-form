const express = require("express");
const routes = express();
const mongoose = require("mongoose");
const Contact = require("../model/contact");

routes.get("/contacts", async (req, res) => {
  const findContact = await Contact.find();
  res.status(201).json({ success: true, data: findContact });
});
// routes.get("/contacts", (req, res) => {
//   console.log(Contact);
//   Contact.find()
//     .then((contact) => res.json(contact))
//     .catch((err) => res.status(400).json(err));
// });

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
