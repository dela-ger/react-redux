# React Redux
## Redux
 # React Redux Thunk Application

## Overview
This is a React application that demonstrates the use of Redux for state management and Redux Thunk for handling asynchronous actions. The application fetches a list of products from an API and displays them in a user-friendly interface.

---

## Features

- **Redux Integration**: State management is handled by Redux.
- **Asynchronous Data Fetching**: Redux Thunk is used for dispatching asynchronous actions.
- **Error Handling**: Graceful handling of errors during API calls.
- **Dynamic Rendering**: Displays a loading message, error message, or the fetched data based on the current state.

---

## Project Structure

```
.
├── public
├── src
│   ├── components
│   │   └── App.js         # Main React component
│   ├── store.js          # Redux store configuration
│   └── reducers.js       # Reducer for handling state changes
└── README.md             # Project documentation
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Code Overview

### 1. `store.js`
- Configures the Redux store with the `dataReducer` and applies the `thunk` middleware.

### 2. `reducers.js`
- Handles the three states of data fetching:
  - `FETCH_DATA_REQUEST`: Sets loading to `true`.
  - `FETCH_DATA_SUCCESS`: Populates the `data` array with fetched products.
  - `FETCH_DATA_FAILURE`: Stores the error message.

### 3. `App.js`
- Main React component that connects to the Redux store.
- Dispatches the `fetchData` action on component mount using `useEffect`.
- Renders loading, error, or fetched product data based on the state.

---

## API

- The application fetches data from [DummyJSON](https://dummyjson.com/products).

---

## Example Output

### Loading State
```
Loading...
```

### Error State
```
Error: <error-message>
```

### Success State
- List of product titles.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

---

## Contributing
If you wish to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes and open a pull request.

