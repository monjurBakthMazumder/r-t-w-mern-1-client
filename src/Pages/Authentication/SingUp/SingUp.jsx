import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../Hock/useAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
const SingUp = () => {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");
  const { createUser, setUser } = useAuth();
  const loc = useLocation();
  const navigate = useNavigate();
  const handleSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    if (password?.length < 6) {
      setError("password must be at least 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        navigate(loc.state ? loc.state : "/");
        Swal.fire(
          "Account created!!",
          "Successfully create account",
          "success"
        );
        updateProfile(result.user, {
          displayName: name,
        });
        setUser({
          displayName: name,
        });
      })
      .catch(() => {
        Swal.fire("Oops!!", "Email already exits", "error");
      });
  };
  return (
    <div className="hero my-20">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
        <form className="card-body" onSubmit={handleSingIn}>
          <h1 className="text-4xl text-center font-bold text-primary mb-5">
            Sign Up
          </h1>
          <SocialLogin />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={isShow ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered w-full"
                required
              />
              <span
                className="absolute -ml-8 mt-3 text-2xl text-secondary "
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>
          <p className="text-red-600 text-xs">{error}</p>
          <div className="form-control mt-6">
            <button
              className="btn border border-secondary text-white  bg-secondary hover:text-secondary hover:bg-transparent hover:border-secondary "
              type="submit"
            >
              Sign In
            </button>
          </div>
          <p className="text-xs text-center my-5">
            Already have account? please{" "}
            <Link
              to={"/sing-in"}
              className="font-bold underline text-secondary"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
