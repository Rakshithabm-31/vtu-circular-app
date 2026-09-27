# VTU Examination Circulars

A full-stack web application for accessing and viewing VTU examination circulars through a simple web interface.

## Features

- View VTU examination circulars
- Retrieve circular information from a MySQL database
- Open original circular documents through direct links
- React-based frontend
- Node.js and Express.js backend
- REST API for retrieving circular data
- MySQL database integration
- Puppeteer-based scraper for collecting circular information

## Tech Stack

### Frontend

- React.js
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- Sequelize
- REST API

### Database

- MySQL

### Web Scraping

- Puppeteer

### Tools

- Git
- GitHub
- VS Code

## Architecture

```text
User
  ↓
React Frontend
  ↓
Express.js REST API
  ↓
Sequelize
  ↓
MySQL Database
  ↓
Circular Data
```

## Project Structure

```text
vtu-circular-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Circular.js
│   ├── .env.example
│   ├── insertCirculars.js
│   ├── scraper.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CircularList.js
│   │   │   ├── Header.js
│   │   │   └── SearchBar.js
│   │   ├── pages/
│   │   │   ├── ArchivedPage.js
│   │   │   └── CircularsPage.js
│   │   └── styles/
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## How It Works

1. The React frontend sends a request to the backend API.
2. The Express.js server receives the request.
3. Sequelize communicates with the MySQL database.
4. Circular records are retrieved from the database.
5. The backend sends the circular data to the React frontend.
6. The frontend displays the circular titles and links.
7. Users can open the original circular documents through the provided links.

## API Endpoint

```text
GET /api/circulars
```

This API endpoint retrieves circular information from the MySQL database.

## Local Setup

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MySQL
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Rakshithabm-31/vtu-circular-app.git
cd vtu-circular-app
```

### 2. Create the Database

Create a MySQL database named:

```text
vtu_circulars
```

### 3. Configure Environment Variables

Go to the `backend` folder and create a `.env` file based on `.env.example`.

```env
DB_NAME=vtu_circulars
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
```

Do not upload the `.env` file to GitHub.

### 4. Install Backend Dependencies

```bash
cd backend
npm install
```

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Build the Frontend

```bash
npm run build
```

### 7. Start the Backend

Go back to the backend folder:

```bash
cd ../backend
node server.js
```

The application will be available at:

```text
http://localhost:3000
```

## Environment Variables

The backend requires the following environment variables:

| Variable | Description |
|---|---|
| DB_NAME | MySQL database name |
| DB_USER | MySQL username |
| DB_PASSWORD | MySQL password |
| DB_HOST | MySQL host |

## Project Purpose

The project provides a centralized web-based interface for accessing VTU examination circular information instead of manually searching through different notices.

## Future Improvements

- Improve search and filtering
- Add better circular categorization
- Improve archive management
- Add automatic scheduled scraping
- Improve responsive design
- Deploy the application to the cloud

## Demo

Demo video and live application link will be added after deployment.

## Author

Rakshitha B M

Computer Science and Engineering (Artificial Intelligence & Machine Learning)

GitHub: https://github.com/Rakshithabm-31