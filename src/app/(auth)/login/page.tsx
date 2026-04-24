import Link from "next/link";

export default function LoginForm() {
  return (
    <div className=" mt-20 flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login your account
        </h1>
        <hr className="border-gray-300 mb-8" />

        <div className="space-y-5">
          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-500 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-500 placeholder-gray-400 outline-none"
            />
          </div>
          {/* Submit */}
          <button className="cursor-pointer w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 rounded-lg transition-colors">
            Register
          </button>
        </div>
        <p className="text-center mt-5 font-semibold">Dont’t Have An Account ? <Link className="underline text-red-700" href="/register">Register</Link></p>
      </div>
    </div>
  );
}