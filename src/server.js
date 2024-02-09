const express = require("express");
const subscribersRoute = require("./routes/subscribersRoute");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

// Initialize express application
const app = express();

// Hello World
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use the subscribers route
app.use("/subscribers", subscribersRoute);

// Serve the Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
