# Expense Management Application

This is a simple Expense Management application built with Angular and Firebase Realtime Database. The application allows users to perform CRUD (Create, Read, Update, Delete) operations to manage their expenses.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Features

- **Add Expense:** Users can add new expense records with a title, description, and price.
- **View Expenses:** Users can view a list of all expenses.
- **Edit Expense:** Users can edit existing expense records.
- **Delete Expense:** Users can delete expense records.
- **Total Expenses:** The application displays the total sum of all expenses.

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/expense-management.git
    cd expense-management
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Install Angular CLI if you haven't already:**

    ```bash
    npm install -g @angular/cli
    ```

## Configuration

1. **Firebase Configuration:**

    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add a new web app to your Firebase project and copy the Firebase configuration details.
    - Enable Firestore Database in your Firebase project.

2. **Environment Configuration:**

    - Create an `environment.ts` file in the `src/environments` folder.
    - Add your Firebase configuration details to the `environment.ts` file as shown below:

    ```typescript
    export const environment = {
      production: false,
      firebase: {
        apiKey: 'YOUR_API_KEY',
        authDomain: 'YOUR_AUTH_DOMAIN',
        projectId: 'YOUR_PROJECT_ID',
        storageBucket: 'YOUR_STORAGE_BUCKET',
        messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
        appId: 'YOUR_APP_ID',
        measurementId: 'YOUR_MEASUREMENT_ID'
      }
    };
    ```

## Usage

1. **Run the application:**

    ```bash
    ng serve
    ```

    The application will be available at `http://localhost:4200`.

## Screenshots

![image](https://github.com/sylwia-werner/Angular-Firebase/assets/97024171/4280116e-fc0c-425a-93ff-59b02b43923f)

![image](https://github.com/sylwia-werner/Angular-Firebase/assets/97024171/14495b6f-416f-4eac-9b21-d48d482de9a5)

