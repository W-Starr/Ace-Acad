import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import API from '../api/api';


export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/api/login", {
        email: data.email,
        password: data.password,
      });

      alert(res.data.message); // e.g., 'Login successful!'
      // Optionally store user data or navigate
      // Example: localStorage.setItem("user", JSON.stringify(res.data));
      // navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 font-gilroy">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center text-[#0C1639] dark:text-white">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-[#0C1639] dark:text-blue-300 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0C1639] text-white p-2 rounded hover:opacity-90"
          >
            Login
          </button>
        </form>

        {/* Google Sign In */}
        <button
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded flex justify-center items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          onClick={() => alert("Google Sign-In not yet implemented")}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 dark:text-gray-200">Continue with Google</span>
        </button>

        {/* Sign Up CTA */}
        <p className="text-center text-sm text-gray-700 dark:text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#0C1639] dark:text-blue-400 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
