# Bike Library API

This is a simple REST API built using Nest.js to manage a bike library. The API allows users to create, update, retrieve, and delete bikes. It uses **SQLite** for data storage, with support for **CRUD operations** and integrated **Swagger** documentation.

## Features

- **GET /bikes**: Fetch a list of all bikes in the library.
- **POST /bikes**: Add a new bike to the library.
- **PUT /bikes/{id}**: Update an existing bike.
- **DELETE /bikes/{id}**: Delete a bike by ID.
- **Swagger Documentation**: Use Swagger UI for interactive API testing.

## Prerequisites

- **Node.js** 
- **npm** 
- **SQLite3** 

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kamal-kgp/bike-library.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. setup database
SQLite will automatically create the database file in the project root when you run the API.

### 4. Run the Application

```bash
npm run start
```

**The API will be available at http://localhost:3000.**

### 5. Access swagger documentation
Once the application is running, you can access the Swagger UI for API documentation and testing:
**http://localhost:3000/api**