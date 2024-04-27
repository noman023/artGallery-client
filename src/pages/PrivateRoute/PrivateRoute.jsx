import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"} />;
}
