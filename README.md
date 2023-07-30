
# Healthy Web (Frontend Test)

### Sample Description

"Healthy" is a web application designed to help users track their daily meals and body status, maintain records of exercises and diary entries over various periods (day, week, month, and year), and visualize their progress through graphs and a history calendar. The app also offers personalized health, diet, and beauty recommendations based on user input and goals.
The main features of the "Healthy" app include:

**Daily Meal Tracking**
   
Users can log their daily meals to monitor their nutritional intake and eating habits.

**Daily Body Status**

Keep track of body measurements or health indicators on a daily basis.

**Records and Diary**

Users can maintain records of exercises, fitness routines, and personal thoughts through a diary feature.

**Periodic Tracking**

"Healthy" allows users to view their progress over different periods, such as daily, weekly, monthly, and yearly.

**Graphs and History Calendar**

Visualize and analyze recorded data through graphs and a calendar view to identify trends and patterns.

**Recommendations**

The app provides personalized health, diet, and beauty recommendations based on user preferences and goals.## Table of Contents

- [Project Name](#healthy)
- [Project Description](#project-description)
- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Built With](#built-with)
## Prerequisites

- TypeScript for added type safety and better development experience. If you don't have TypeScript installed globally, you can install it using pnpm:

```bash
pnpm install -g typescript
```

- Node.js: You need to have Node.js installed on your system to run the development environment and build processes.

- Package Manager (npm, yarn or pnpm): I uses pnpm by default. Alternatively, you can use yarn or the original npm if you prefer.

- Modern Web Browser: Ensure you have a modern web browser that supports ECMAScript 6 (ES6) and modern web standards.
## Installation

Follow these steps to set up the "Healthy" web app locally:

- Clone the repository: Already sent zip file for this.
  ```bash
  git clone https://github.com/your-username/sample-healthy.git
  cd healthy
  ```

- Install dependencies using pnpm:
  ```bash
  pnpm install
  ```

- Run the JSON server for the mockup database:
  ```bash
  pnpm run server
  ```

- Create a configuration file (if required):
  - If the project requires any configuration files (e.g., API keys, environment variables), create a `.env` file at the root of the project and add the necessary variables.

- Start the development server:
  ```bash
  pnpm dev
  ```

- Open your web browser:
  - The development server should be running at `http://localhost:5173` (or another port if specified).
  - Open this URL in your web browser to access the "Healthy" app.
  - The json server for mock database should be running at `http://localhost:3001` (or another port if specified).
  - Open json server and locate to the endpoint for mockup data.
## Configuration

The "Healthy" web app may require certain configurations to customize its behavior. Below is the optional configuration you might need:

- **Environment Variables (`.env`):**
  - If the project requires any environment-specific configurations or API keys, create a `.env` file at the root of the project and add the necessary variables there. Make sure not to commit this file to version control to keep sensitive information secure. Check `.gitignore` for details.

  ```plaintext
  API_URL=[value]
  ANOTHER_VARIABLE=[another_value]
  ```

  Replace `ANOTHER_VARIABLE` with the actual variable names, and provide their respective values.


## Folder Structure

The "Healthy" project follows a structured organization to keep the codebase organized and maintainable. Here's an overview of the main folders and files in the project:

```plaintext
root/
├── node_modules/
├── public/
│   ├── logo.svg
│   └── ...other static assets
├── src/
├── ├── api/
│   ├── ├── index.ts
│   ├── └── ...other api
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── root.tsx
│   │   ├── ui/
│   │   |   └── ...styled components
│   ├── config/
│   │   ├── theme.ts
│   │   └── ...other configuration
│   ├── data/
│   │   ├── sample-db.json
│   │   └── ...other mockup data files
│   ├── pages/
│   │   ├── home-page.ts
│   │   ├── records.ts
│   │   ├── recommendations.ts
│   │   └── ...other page components
│   ├── utils/
│   │   └── ...utility functions
│   ├── App.js
│   ├── index.js
│   └── ...other top-level application files
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── README.md
└── ...other configuration and build files
```

- `node_modules/`: Contains the dependencies installed via pnpm.

- `public/`: Contains the HTML template and other static assets like images, favicons, etc.

- `src/`: This is where the main source code resides.

  - `api/`: Api configuration and functions

  - `components/`: Houses reusable React components used throughout the app.

  - `config/`: configuration for theme and more.  

  - `data/`: Contains mockup data files used during development.

  - `pages/`: Includes React components that represent different pages of the app.

  - `utils/`: Contains utility functions and helper modules.

  - `App.js`: The root component that handles routing and renders the app's layout.

  - `index.js`: The entry point of the application.

- `.gitignore`: Specifies which files and directories should be excluded from version control.

- `package.json`: Contains the project's metadata and lists the required dependencies.

- `pnpm-lock.yaml`: The lock file for pnpm, ensuring consistent installations across different environments.

- `README.md`: The README file you are currently reading, providing information about the project.

## Available Scripts

In the project directory, you can run the following scripts using pnpm:

- **Development Server:**
  ```bash
  pnpm dev
  ```
  Starts the development server, allowing you to view the app in your web browser. The development server automatically reloads the app whenever you make changes to the source code.

- **Build:**
  ```bash
  pnpm build
  ```
  Builds the production-ready version of the "Healthy" app. The output will be available in the `dist/` directory.

- **Linting:**
  ```bash
  pnpm lint
  ```
  Runs the linter to check for and report code style and syntax issues. This helps ensure consistent and clean code.

- **Start JSON Server:**
  ```bash
  pnpm run server
  ```
  Starts the `json-server` mockup database at `http://localhost:3001`. The app uses this server to simulate interactions with the mock data.

- **Preview:**
  ```bash
  pnpm preview
  ```
  Builds and serves a production-like version of the "Healthy" app. This script allows you to preview the app in a local environment, simulating the production environment.

These scripts are defined in the `package.json` file's `"scripts"` section, and you can run them using the `pnpm <script-name>` command.
## Deployment

To deploy the "Healthy" web app to a production environment, follow these general steps:

- **Build the App:**
   Use the following command to build the production-ready version of the app:
   ```bash
   pnpm build
   ```
   The optimized files will be available in the `dist/` directory.

- **Configure the Server:**
   Set up a web server (e.g., Nginx, Apache) to host the built files. Make sure the server is properly configured to handle routing and serve the app's assets.

- **Serve the App:**
   Copy the contents of the `dist/` directory to the appropriate location on your web server. Ensure that the entry point (`index.html`) is served correctly for all routes.

- **Environment Variables:**
   If your app uses environment variables, make sure to set them appropriately in the production environment.

- **SSL Certificate (Optional):**
   If your deployment is on HTTPS, obtain and configure an SSL certificate for secure connections.

- **Test the Deployment:**
   Thoroughly test the deployed app to ensure everything works as expected in the production environment.

- **Monitor and Maintain:**
   Keep an eye on the app's performance and user experience. Regularly monitor and maintain the server and app to ensure smooth operation.

Please note that these steps are general guidelines. The actual deployment process may vary depending on your hosting environment and infrastructure.

If you are deploying the app to a specific platform (e.g., Vercel, Netlify, AWS, etc.), you might have specific deployment procedures provided by the platform. Refer to their documentation for detailed instructions on deploying a React app to their services.

Always remember to back up your data and configurations before deploying the app to avoid any potential loss.
## Built With

**Client:** Vite, React, React Router Dom, React Query, Axios, ChakraUi, EmotionCSS, Framer Motion, ChartJs, React ChartJs, Font Source

**Mock Server:** json-server

