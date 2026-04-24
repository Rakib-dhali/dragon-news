export default function RegisterForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register your account
        </h1>
        <hr className="border-gray-300 mb-8" />

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-500 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-500 placeholder-gray-400 outline-none"
            />
          </div>

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

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-gray-700">
              Accept <span className="font-bold">Term & Conditions</span>
            </label>
          </div>

          {/* Submit */}
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 rounded-lg transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}