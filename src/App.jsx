import {
  Routes,
  Route
} from "react-router-dom";

import Home
  from "./pages/Home";

import Admin
  from "./pages/Admin";

import UpdateBooking
  from "./components/UpdateBooking";

import Login
  from "./pages/Login";

import ProtectedRoute
  from "./components/ProtectedRoute";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/update"
        element={
          <UpdateBooking />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/admin"
        element={

          <ProtectedRoute>

            <Admin />

          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;