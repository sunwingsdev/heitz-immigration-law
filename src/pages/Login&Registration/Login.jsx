import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useToasts } from "react-toast-notifications";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async ({ email, password }) => {
    try {
      setLoadingState(true);
      const result = await signIn(email, password);
      const loggedUser = result.user;
      reset();
      addToast(
        `${loggedUser?.displayName || "Unknown user"} logged in successfully`,
        {
          appearance: "success",
          autoDismiss: true,
        }
      );
      setLoadingState(false);
      navigate(from, { replace: true });
    } catch (error) {
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
      setLoadingState(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] relative">
      <img
        className="w-full h-[100vh]"
        src="https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg"
        alt=""
      />
      <div className="border-2 border-gray-100 p-7 w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-[#bdcbcc] absolute">
        <h2 className="text-4xl font-bold text-center p-6 mb-4">
          Lo<span className="text-[#209890]">gin</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 mb-4">
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="User & Email Address"
              className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
              type="text"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
            <div className="relative w-full">
              <input
                {...register("password", { required: "Password is required" })}
                placeholder="Your Password"
                className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            <p className="text-base py-2">
              Do not have an account? Please{" "}
              <Link to="/registration">
                <span className="text-blue-500 font-semibold underline">
                  Register
                </span>
              </Link>
            </p>
          </div>
          <button
            disabled={loadingState}
            className="uppercase text-base font-medium px-5 py-2 bg-[#209890] text-white rounded-md mt-2"
            type="submit"
          >
            {loadingState ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
