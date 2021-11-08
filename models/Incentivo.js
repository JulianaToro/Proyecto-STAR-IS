const mongoose = require("mongoose");

const IncentivoSchema = new mongoose.Schema(
  {
    nameIncentivo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    plandeIncentivo: {
      type: String,
      required: true,
    },
    estrellasNecesarias: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Incentivo", IncentivoSchema);
