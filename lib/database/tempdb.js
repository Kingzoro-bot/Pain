//𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻
const mongoose = require("mongoose");
const TempDb = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    default: "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻"
  },
  creator: {
    type: String,
    default: "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻"
  },
  data: {
    type: Object,
    default: {}
  }
});
const dbtemp = mongoose.model("dbtemp", TempDb);
module.exports = {
  dbtemp
};
