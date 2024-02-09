const express = require("express");
const {
  getSubscribers,
  getSubscriberNames,
  getSubscriberById,
} = require("../controllers/subscribersController");

// Initialize express router
const subscribersRoute = express.Router();

// Define routes
subscribersRoute.get("/", getSubscribers);
subscribersRoute.get("/names", getSubscriberNames);
subscribersRoute.get("/:id", getSubscriberById);

// Export the router
module.exports = subscribersRoute;
