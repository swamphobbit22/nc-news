# NC News

Welcome to NC News! This application provides a platform for browsing articles, viewing comments, and interacting with a variety of topics. Below, you will find detailed instructions on how to set up and run the application locally, along with an explanation of its structure and features.

## Features

- **Browse Articles**: View, sort, and filter articles by topic or popularity.
- **User Interaction**: Add comments, vote on articles and comments, and manage user profiles.
- **Topics**: Explore articles by various predefined topics.
- **Responsive Design**: Fully optimised for mobile and desktop views.

### Project Status

This project is still a work in progress. Future updates will include features such as:

- User authentication and registration.
- Allowing users to submit their own articles.
- Enhanced interactivity and user engagement features.

## Hosted Application

The app is live and accessible at: [NC News](https://nc-news-kirsty.netlify.app/)

## Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**
- **VS Code** (or your preferred IDE)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nc-news
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Obtain an Unsplash API access key for dynamic topic images.
   - Create a `.env` file in the project root and add:
     ```env
     VITE_UNSPLASH_ACCESS_KEY=<your-access-key>
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Visit `http://localhost:5173` to see the app.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.

## Project Structure

- `src/`
  - `api/`: API utility functions for communicating with the backend.
  - `components/`: React components for UI.
  - `context/`: Context providers for state management.
  - `utils/`: Helper functions like date formatting and sorting.
  - `Dashboard/`: Components for user dashboards.

## Dependencies

Key dependencies include:

- [React](https://reactjs.org/): UI library.
- [React Router](https://reactrouter.com/): For navigation.
- [Axios](https://axios-http.com/): HTTP requests.
- [Vite](https://vitejs.dev/): Development and build tool.

## Contributing

This project is a student portfolio piece and is not currently open to external contributions.
However, feel free to 
1. Fork the repository.
2. Clone your own version

## Further Information
This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)

## Licence

This project is licensed under the [MIT Licence](LICENSE).


