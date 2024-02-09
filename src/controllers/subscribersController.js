const db = require("../db/index.js");
const { ObjectId } = require("mongodb");

// Retrieve all subscribers from the database
const getSubscribers = async (req, res) => {
  try {
    // Get the subscribers collection
    const collection = await db.collection("subscribers");

    // Retrieve all subscribers from the collection
    const subscribers = await collection
      .find({}, { projection: { __v: 0 } })
      .toArray();

    // If subscribers are found, send them as a JSON response
    if (subscribers) res.status(200).json(subscribers);
    // If no subscribers are found, send a 404 Not Found status code
    else res.status(404).json({ message: "No Subscribers found" });
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error status code
    res.status(500).json({ message: err.message });
  }
};

// Retrieve names and subscribed channels of all subscribers
const getSubscriberNames = async (req, res) => {
  try {
    // Get the subscribers collection
    const collection = await db.collection("subscribers");

    // Retrieve all subscribers from the collection and project only the name and subscribedChannel fields
    const subscribers = await collection
      .find({}, { projection: { name: 1, subscribedChannel: 1, _id: 0 } })
      .toArray();

    // If subscribers are found, send them as a JSON response
    if (subscribers) res.status(200).json(subscribers);
    // If no subscribers are found, send a 404 Not Found status code
    else res.status(404).json({ message: "No Subscribers found" });
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error status code
    res.status(500).json({ message: err.message });
  }
};

// Retrieve a single subscriber by their MongoDB ObjectId
const getSubscriberById = async (req, res) => {
  try {
    // Get the subscriber ID from the request parameters
    const { id } = req.params;

    // Get the subscribers collection
    const collection = await db.collection("subscribers");

    // Retrieve the subscriber from the collection by their unique identifier
    const subscriber = await collection.findOne(
      { _id: new ObjectId(id) },
      { projection: { __v: 0 } }
    );

    // If the subscriber is found, send it as a JSON response
    if (subscriber) res.status(200).json(subscriber);
    // If the subscriber is not found, send a 404 Not Found status code
    else res.status(404).json({ message: "Subscriber not found" });
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error status code
    res.status(500).json({ message: err.message });
  }
};

// Export controller functions
module.exports = { getSubscribers, getSubscriberNames, getSubscriberById };
