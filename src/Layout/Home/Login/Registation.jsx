import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Registation = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const { creatUser, photoName, googleLogIn, gitHubLogin } =
    useContext(AuthContext);
  const loacation = useLocation();
  // console.log(loacation);
  const from = loacation.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const from = e.target;

    if (password < 6) {
      setError("password have to more than 6 characters");
    }

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
        photoName(name, photo);
        from.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

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
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <div className="my-5">
      <div className=" w-[500px] mx-auto ">
        <div className="w-[500px] bg-white border-2 border-gray-200 m-auto  -top-3 -right-3 rounded-md">
          <form onSubmit={handleSignUp} className="p-10">
            <h3 className="text-center text-4xl">Login</h3>
            <div className="my-5">
              <p>Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="my-5">
              <p>Photo URL</p>
              <input
                onChange={(e) => setPhoto(e.target.value)}
                className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                type="url"
                name="photo"
                required
              />
            </div>
            <div className="my-5">
              <p>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="my-5">
              <p>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="my-8">
              <button className="w-full font-semibold text-center  bg-red-600 rounded-lg h-[55px]">
                SignUp
              </button>
              <p className="my-2 text-center">
                Already have a account?
                <Link to={"/login"} className="text-red-600 mx-2">
                  Login.
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
        <div className="text-red-600 text-center m-2">{error}</div>
      </div>
    </div>
  );
};

export default Registation;
