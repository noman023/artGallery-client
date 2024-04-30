import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Button from "../Button/Button";
import SectionHead from "../SectionHead/SectionHead";

import { AuthContext } from "../../providers/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export default function Register() {
  const [showPassowrd, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    // if (
    //   /[A-Z]/.test(password) &&
    //   /[a-z]/.test(password) &&
    //   password.length === 6
    // ) {
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Wrong Password Making ",
    //     text: "Your password should include at least 1 uppercase and lowercase letter. And should be at least 6 character long.",
    //   });

    //   return;
    // }

    createUser(email, password)
      .then(() => {
        {
          Swal.fire({
            icon: "success",
            title: "You've been register successfully",
          });
        }

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });

        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.message,
        });
      });
  };

  const hanldeShowPassword = () => {
    setShowPassword(!showPassowrd);
  };
  return (
    <div>
      <SectionHead>Create Your Account</SectionHead>

      <div className="card shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100 my-20">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

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
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered"
            />
          </div>

          <div className="form-control border relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassowrd ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />

            {showPassowrd ? (
              <FaEye
                onClick={hanldeShowPassword}
                className="absolute right-2 bottom-3 text-xl cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={hanldeShowPassword}
                className="absolute right-2 bottom-3 text-xl cursor-pointer"
              />
            )}
          </div>

          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 underline">
              Login Here
            </Link>
          </p>

          <div className="form-control mt-6">
            <Button>Register</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
