import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data); // Replace with API call later

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-gilroy">
      <div className="bg-white p-8 rounded shadow-md w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center text-[#0C1639]">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />

          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-[#0C1639] hover:underline">
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
          className="w-full border border-gray-300 p-2 rounded flex justify-center items-center space-x-2 hover:bg-gray-100"
          onClick={() => alert("Google Sign-In not yet implemented")}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        {/* Sign Up CTA */}
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#0C1639] font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
