const mongoose = require("mongoose");
const dotenv = require("dotenv");
const subscriberModel = require("./models/subscriber");
const data = require("./data");

// Load environment variables
dotenv.config();

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost/subscribers";

// Connect to MongoDB
const connectDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully...");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

// Refresh all subscriber data in the database
const refreshAllSubscribers = async () => {
  try {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    console.log("Subscriber data refreshed successfully...");
  } finally {
    mongoose.disconnect();
    console.log("Database connection closed.");
  }
};

// Main function to execute database operations
(async () => {
  await connectDatabase();
  await refreshAllSubscribers();
})();
