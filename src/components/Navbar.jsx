import { Link, useNavigate }
  from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();

  const isAdmin =
    sessionStorage.getItem(
      "admin"
    );

  const handleLogout = () => {

    sessionStorage.removeItem(
      "admin"
    );

    alert("Logged Out");

    navigate("/login");
  };

  return (

    <nav
      className="
      navbar
      navbar-expand-lg
      navbar-dark
      bg-dark
      px-4
      py-3
      "
    >

      <Link
        className="
        navbar-brand
        fw-bold
        fs-4
        "
        to="/"
      >
        Salon Booking
      </Link>

      <div className="ms-auto d-flex">

        <Link
          to="/"
          className="
          text-white
          text-decoration-none
          me-4
          "
        >
          Home
        </Link>

        <Link
          to="/update"
          className="
          text-white
          text-decoration-none
          me-4
          "
        >
          Update Booking
        </Link>

        {!isAdmin && (

          <Link
            to="/login"
            className="
            text-white
            text-decoration-none
            "
          >
            Admin
          </Link>
        )}

        {isAdmin && (

          <button
            className="
            btn
            btn-danger
            btn-sm
            "
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;