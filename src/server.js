const express = require("express");
const subscribersRoute = require("./routes/subscribersRoute");

// Initialize express application
const app = express();

// Hello World
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use the subscribers route
app.use("/subscribers", subscribersRoute);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
