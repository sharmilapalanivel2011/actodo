import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup({ users, setusers }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSignup(e) {
    e.preventDefault()
    setError("")

    // Validation
    if (!username.trim()) {
      setError("Username is required")
      return
    }
    if (username.length < 3) {
      setError("Username must be at least 3 characters")
      return
    }
    if (!password) {
      setError("Password is required")
      return
    }
    if (password.length < 3) {
      setError("Password must be at least 3 characters")
      return
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    if (users.some((user) => user.username === username)) {
      setError("Username already exists")
      return
    }

    setLoading(true)

    // Simulate delay
    setTimeout(() => {
      setusers([...users, { username, password }])
      navigate("/")
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-sky-400 to-navy-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">📝 ActoDo</h1>
          <p className="text-blue-100">Create your account and start organizing</p>
        </div>

        {/* Signup Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-navy-500 dark:text-sky-400 mb-2">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Join us to manage your activities</p>

          {error && (
            <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
                disabled={loading}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Minimum 3 characters</p>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
                disabled={loading}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Minimum 3 characters</p>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
                disabled={loading}
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-sky-500 hover:text-sky-600 font-semibold underline transition-colors"
            >
              Login here
            </Link>
          </p>

          {/* Privacy Note */}
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              ✅ Your data is stored locally and never shared. Your privacy is important to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup