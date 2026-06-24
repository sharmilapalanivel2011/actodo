import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login({ users }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simulate delay
    setTimeout(() => {
      const userFound = users.some(
        (user) => user.username === username && user.password === password
      )

      if (userFound) {
        navigate("/landing", { state: { user: username } })
      } else {
        setError("Invalid username or password. Please try again.")
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-500 via-navy-400 to-sky-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">📝 To-DO-List</h1>
          <p className="text-blue-100">Manage your activities efficiently</p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-navy-500 dark:text-sky-400 mb-2">Welcome Back</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Login to your account</p>

          {error && (
            <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
                disabled={loading}
              />
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
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
                disabled={loading}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-navy-500 to-sky-500 hover:from-navy-600 hover:to-sky-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-sky-500 hover:text-sky-600 font-semibold underline transition-colors"
            >
              Sign up here
            </Link>
          </p>

         
        </div>
      </div>
    </div>
  )
}

export default Login