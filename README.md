# MERN Stack Bookstore Project

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Introduction
The MERN Stack Bookstore project covers the creation of a MongoDB database to store book information and the implementation of CRUD (Create, Read, Update, Delete) + Edit functionality for managing books.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`. Each directory has its own set of files and subdirectories.

### Frontend

```
└── Frontend/
    ├── src/
    │   ├── assets
    │   ├── components/
    │   │   ├── home/
    │   │   │   ├── BookModal.jsx
    │   │   │   ├── BooksCard.jsx
    │   │   │   ├── BookSingleCard.jsx
    │   │   │   └── BooksTable.jsx
    │   │   ├── BackButton.jsx
    │   │   └── Spinner.jsx
    │   ├── pages/
    │   │   ├── CreateBooks.jsx
    │   │   ├── DeleteBooks.jsx
    │   │   ├── EditBooks.jsx
    │   │   ├── Home.jsx
    │   │   └── ShowBooks.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js
    └── node_modules
```

- **src/assets**: Contains assets such as images, stylesheets, etc.
- **src/components**: Reusable React components used throughout the application.
  - **home**: Components specific to the home page.
- **src/pages**: React components representing different pages of the application.
- **src/App.jsx**: Main React application component.
- **src/main.jsx**: Entry point for the React application.
- **src/index.css**: Main stylesheet for the application.
- **index.html**: HTML template for the React application.
- **package-lock.json, package.json**: Node.js package files.
- **tailwind.config.js, vite.config.js**: Configuration files for Tailwind CSS and Vite.
- **node_modules**: Node.js dependencies.

### Backend

```
└── backend/
    ├── config.js
    ├── index.js
    ├── package-lock.json
    ├── package.json
    ├── node-modules
    ├── models/
    │   └── bookModels.js
    └── routes/
        └── bookRoute.js
```
- **config.js**: Configuration file for the backend.
- **index.js**: Main entry point for the backend server.
- **package-lock.json, package.json**: Node.js package files.
- **models/bookModel.js**: MongoDB model for the book entity.
- **routes/bookRoute.js**: Express.js routes for book-related operations.
- **node_modules**: Node.js dependencies.

## Getting Started
To run the MERN Stack Bookstore Project on your local machine, follow these steps:

1. Clone this repository.
2. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
3. Run `npm run dev` to start the frontend development server.
4. Open a new terminal, navigate to the `backend` directory, and run `npm install` to install backend dependencies.
5. Run `npm run dev` to start the backend server.

## Features
- Create, Read, Update, Edit and Delete books.
- User-friendly interface with React components.
- Responsive design for various screen sizes.
- Tailwind CSS for styling.

![ViteReact-GoogleChrome2024-02-1112-47-04-ezgif com-crop](https://github.com/SanskritiGupta05/Bookstore-mern-app/assets/77205923/0c748522-7392-4b96-9bad-2e5d8cab475b)


## Dependencies
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.
