import { Link, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import SectionHead from "../SectionHead/SectionHead";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";

export default function Login() {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // navigate after login
  const navigateTo = () => {
    navigate(location?.state ? location.state : "/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged in successfully",
        });

        navigateTo();
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.message,
        });
      });
  };

  return (
    <>
      <div className="text-center">
        <SectionHead>Login To Your Account</SectionHead>

        <div className="card shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100 mt-20 ">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <p className="mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-purple-500 underline">
                Resigter Here
              </Link>
            </p>

            <div className="form-control mt-6">
              <Button>Login</Button>
            </div>
          </form>
        </div>

        <div className="flex justify-center gap-4 mt-10 mb-20">
          <button className="btn bg-red-500 hover:bg-red-600 text-white">
            Login with Google
          </button>
          <div className="divider divider-horizontal">Or</div>

          <button className="btn btn-neutral">Login with Github</button>
        </div>
      </div>
    </>
  );
}
