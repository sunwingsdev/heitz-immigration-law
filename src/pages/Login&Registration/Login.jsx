const Login = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] relative">
      <img
        className="w-full h-[100vh]"
        src="https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg"
        alt=""
      />
      <div className=" border-2 border-gray-100 p-7 w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-[#bdcbcc] absolute">
        <h2 className="text-4xl font-bold text-center p-6 mb-4">
          Lo<span className="text-[#209890]">gin</span>
        </h2>
        <div>
          <div className="flex flex-col gap-3 mb-4">
            <input
              placeholder="User & Email Address"
              className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
              type="text"
              name=""
              id=""
            />
            <input
              placeholder="Your Password"
              className="w-full bg-[#f1f1f1] px-[22px] py-[15px] outline-blue-950"
              type="password"
              name=""
              id=""
            />
          </div>

          <button
            className=" uppercase text-base font-medium px-5 py-2 bg-[#209890] text-white rounded-md mt-2"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
