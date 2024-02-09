# Get Subscribers

This is a simple Node.js backend application built with Express.js that provides API endpoints for getting subscriber information.

## Features

- Get Subscribers
- Get Just names and Subscribed channel names of Subscribers.
- Get Subscriber with Specific ID

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB setup locally or remotely

### Installation

1. Clone the repository:

```
git clone https://github.com/AkshaysProjects/get-subscribers.git
```

2. Navigate to the cloned repository:

```
cd get-subscribers
```

3. Install the required npm packages:

```
npm install
```

4. Rename a .env.example file in the root directory to .env and add your MongoDB URL.

### Running the Application

Run the application using the following command:

```
npm start
```

The server will start running on http://localhost:3000.
You can change the port by exporting the port you want as "PORT" in your environment.

## API Endpoints

### Subscribers

- GET /subscribers: Retrieves all subscribers.
- GET /subscribers/names: Retrieves names and subscribed channel names of all subscribers.
- GET /subscribers/:id: Retrieves a single subscriber information by its ID.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or fixes.

## License

This project is licensed under the MIT License.