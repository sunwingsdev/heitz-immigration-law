import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useAddUserMutation } from "../../redux/features/allApis/usersApi/usersApi";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

const Registration = () => {
  const { createUser, setUser, updateUserProfile, user } =
    useContext(AuthContext);
  const [addUser] = useAddUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { addToast } = useToasts();
  const [loadingState, setLoadingState] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoadingState(true);
      const result = await createUser(data?.email, data?.password);
      await updateUserProfile(data?.name);
      setUser({
        ...user,
        displayName: data.name,
        phoneNumber: data.mobile,
      });
      const userInfo = {
        uid: result.user?.uid,
        name: data.name,
        email: data.email,
        mobile: data.mobile,
      };
      const insertResult = await addUser(userInfo);
      if (insertResult.data.insertedId) {
        setLoadingState(false);
        addToast(`Your registration successful`, {
          appearance: "success",
          autoDismiss: true,
        });
      }
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
      <div className="border-2 border-gray-100 bg-[#bdcbcc] p-7 w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] absolute">
        <h2 className="text-3xl font-bold text-center mb-4">
          Regist<span className="text-[#209890]">ration</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 mb-4">
            <input
              placeholder="Your Name"
              className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}

            <input
              placeholder="Your Email"
              className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}

            <input
              placeholder="Mobile Number"
              className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
              type="text"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && (
              <span className="text-red-500">Mobile Number is required</span>
            )}

            <div className="relative">
              <input
                placeholder="Your Password"
                className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-4 py-2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>

            <div className="relative">
              <input
                placeholder="Confirm Password"
                className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", { required: true })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-4 py-2"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
              {errors.confirmPassword && (
                <span className="text-red-500">
                  Confirm Password is required
                </span>
              )}
              {!passwordMatch && (
                <span className="text-red-500">Passwords do not match</span>
              )}
              <p className="text-base py-2">
                Already have an account? Please{" "}
                <Link to="/registration">
                  <span className="text-blue-500 font-semibold underline">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>

          <button
            className={`last:uppercase text-base font-medium px-5 py-2 ${
              !passwordMatch
                ? "bg-[#b3b4b4] cursor-not-allowed"
                : "bg-[#209890] cursor-pointer text-white"
            } rounded-md mt-2`}
            type="submit"
            disabled={!passwordMatch || loadingState}
          >
            {loadingState ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
