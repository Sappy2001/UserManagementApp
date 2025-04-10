# User Management Application

## Description
This project is a user management application built with React and Vite, utilizing ShadCN UI components for a modern and responsive user interface. The application fetches user data from an external API and displays it in a user-friendly format.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Approach](#approach)

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sappy2001/UserManagementApp.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd UserManagementApp
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

The application will be running at [http://localhost:3000](http://localhost:3000).

## Usage
- **View Users:** The main page displays a list of users fetched from the API.
- **User Details:** Click on a user card to view more detailed information in a modal.
- **Refresh Data:** Use the "Refresh" button to fetch the latest user data from the API.

## Approach
The application was developed with the following considerations:

- **Component-Based Architecture:** Used React's component system to create reusable and maintainable UI components.
- **Modern UI Library:** Integrated ShadCN UI components to ensure a consistent and responsive design.
- **State Management:** Utilized React's `useState` and `useEffect` hooks for managing component state and side effects.
- **Data Fetching:** Implemented asynchronous data fetching from [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) to populate the user list.
- **Event Handling:** Managed user interactions, such as opening and closing modals, through state and event handlers.



## Created By Saptangsu Modak
