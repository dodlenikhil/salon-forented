import { useState } from "react";

import { useNavigate }
  from "react-router-dom";

import Navbar
  from "../components/Navbar";

function Login() {

  const navigate =
    useNavigate();

  const [username,
    setUsername] = useState("");

  const [password,
    setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    // SIMPLE ADMIN LOGIN

    if (
      username === "admin"
      &&
      password === "admin123"
    ) {

      sessionStorage.setItem(
        "admin",
        "true"
      );

      alert("Login Successful");

      navigate("/admin");

    } else {

      alert(
        "Invalid Credentials"
      );
    }
  };

  return (

    <>

      <Navbar />

      <div className="container mt-5">

        <div
          className="
          card
          shadow
          p-4
          mx-auto
          "
          style={{
            maxWidth: "400px"
          }}
        >

          <h2
            className="
            text-center
            mb-4
            "
          >
            Admin Login
          </h2>

          <form
            onSubmit={handleLogin}
          >

            <input
              type="text"
              placeholder="Username"
              className="
              form-control
              mb-3
              "
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="
              form-control
              mb-3
              "
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button
              type="submit"
              className="
              btn
              btn-dark
              w-100
              "
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </>
  );
}

export default Login;