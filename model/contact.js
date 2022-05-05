const { model, Schema } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
  },
  number: Number,
});

module.exports = model("Contact", contactSchema);
