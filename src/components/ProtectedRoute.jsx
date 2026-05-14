import { Navigate }
  from "react-router-dom";

function ProtectedRoute({
  children
}) {

  const isAdmin =
    sessionStorage.getItem(
      "admin"
    );

  if (!isAdmin) {

    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;