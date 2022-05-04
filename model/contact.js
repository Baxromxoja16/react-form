
const contactSchema = {
  name: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
  },
  number: Number,
};

module.exports = contactSchema;
