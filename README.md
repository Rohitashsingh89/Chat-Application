# Real-Time Chat Application using MERN Stack

This is a Real-Time Chat Application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create accounts, join chat rooms, and communicate with other users in real-time.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Real-Time Communication**: Utilizes WebSocket protocol for real-time messaging.
- **Message History**: Chat history is persisted and available for users when they join a chat room.
- **User Online Status**: Users can see who else is online in the chat room.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Technologies Used

- **MongoDB**: NoSQL database for storing user data, chat room information, and messages.
- **Express.js**: Node.js web application framework for building the backend APIs.
- **React.js**: JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime for server-side development.
- **Socket.IO**: Library for enabling real-time, bidirectional communication between web clients and servers.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Bootstrap**: Frontend framework for responsive design and UI components.
- **Axios**: Promise-based HTTP client for making AJAX requests.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/Rohitashsingh89/Real-Time-Chat-Application.git
    ```

2. Navigate to the project directory:

    ```
    cd Real-Time-Chat-Application
    ```

3. Install dependencies for both the server and client:

    ```
    cd client
    npm install
    cd server
    npm install
    ```

4. Configure environment variables:

    Create a `.env` file in the root of the project and provide the following variables:

    ```
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the react development server:

    ```
    npm start
    ```

6. Start the Node.js development server:

    ```
    nodemon start or Node index.js
    ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. Register for an account or log in if you already have one.
2. Create a new chat room or join an existing one.
3. Start chatting with other users in real-time.
4. Log out when you're done.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

- Thanks to [Socket.IO](https://socket.io/) for providing real-time communication capabilities.
  
