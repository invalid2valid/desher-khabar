import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { sginIn, googleLogIn, gitHubLogin } = useContext(AuthContext);

  const loacation = useLocation();
  // console.log(loacation);
  const from = loacation.state?.from?.pathname || "/";

  const gitHubFunc = () => {
    gitHubLogin()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const googleFunc = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // navigate(from, { replace: true });
        console.log(error);
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    const form = e.target;
    e.preventDefault();
    sginIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        form.reset();
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="w-[500px]   bg-white border-2 border-gray-200 m-auto   rounded-md">
        <form onSubmit={handleLogin} className="p-10">
          <h3 className="text-center text-4xl">Login</h3>
          <div className="my-5">
            <p>Email</p>
            <input
              className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
              type="email"
              value={email}
              name="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="my-5">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
              type="password"
              value={password}
              name="password"
              required
            />
          </div>
          <div className="my-8">
            <button className="w-full font-semibold text-center  bg-red-600 rounded-lg h-[55px]">
              Login
            </button>
            <p className="my-2 text-center">
              New to Desher-Khabar?
              <Link to={"/registration"} className="text-red-600 mx-2">
                Create New Account
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] rounded-lg bg-slate-200 w-2/5"></div>
            <p className="text-center">or</p>
            <div className="h-[2px] rounded-lg bg-slate-200 w-2/5"></div>
          </div>
        </form>
        <div className="my-8 w-3/4 mx-auto">
          <button
            onClick={googleFunc}
            className="w-full font-semibold text-center  bg-white border-2 border-gray-200 rounded-lg h-[55px]"
          >
            Login with Google
          </button>
          <button
            onClick={gitHubFunc}
            className="mt-4 w-full font-semibold text-center  bg-white border-2 border-gray-200 rounded-lg h-[55px]"
          >
            Login with GitHub
          </button>
        </div>
      </div>
      <div className="text-center text-red-700 m-3">{error}</div>
    </div>
  );
};

export default Login;
