const mongoose = require("mongoose");

// Define the Subscriber schema
const susbcriberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subscribedChannel: { type: String, required: true },
  subscribedDate: { type: Date, required: true, default: Date.now },
});

// Export the Subscriber model
module.exports = mongoose.model("Subscriber", susbcriberSchema);
