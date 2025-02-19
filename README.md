# HealU Hospital Care System Web App

## Overview

**HealU Hospital Care System** is a hospital management system designed to streamline hospital operations, providing an efficient solution for both management and patients. The app offers features such as patient symptom analysis, doctor recommendations, secure authentication, and data visualization to support data-driven decision-making.

## Features

- **AI-Driven Symptom Analysis**: The system analyzes patient-reported symptoms and provides potential diagnoses.
- **Doctor Recommendations**: Based on the analysis, the system recommends the appropriate field doctor (e.g., cardiologist, neurologist).
- **Secure Authentication**: Implemented robust user authentication for both patients and hospital staff.
- **Patient Profile Management**: Allows patients to manage their profiles, including medical history and reports.
- **Data Visualization**: Visualizes hospital statistics through interactive graphs for better decision-making.
- **Patient Feedback**: Collects patient feedback to enhance the hospital services.

## Tech Stack

- **Frontend**: React.js
- **Backend**: FastAPI
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **AI**: Integrated AI-powered chatbot for symptom analysis and doctor recommendations

## Installation

1. Clone this repository to your local machine:
    ```bash
      github.com/Talha-Rashid3455/HealU
    ```

2. Navigate to the frontend folder and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

3. Set up the backend by navigating to the backend folder and installing dependencies:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

4. Set up the PostgreSQL database:
    - Create a new database in PostgreSQL and update the database configurations in the backend configuration files.

5. Run the frontend and backend servers:
    - For the frontend:
      ```bash
      npm start
      ```
    - For the backend:
      ```bash
      uvicorn main:app --reload
      ```

## Usage

1. Access the web application at `http://localhost:3000` for the frontend and `http://localhost:8000` for the backend.
2. Users can create a new account or log in securely with JWT authentication.
3. Patients can input their symptoms, and the AI-powered chatbot will suggest potential diagnoses and recommend the appropriate doctor.
4. Hospital management can visualize key statistics through interactive graphs.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with a clear description of your changes.

