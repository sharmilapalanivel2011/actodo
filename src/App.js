import { HashRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import { useState, useEffect } from "react"

function App() {
  const [users, setusers] = useState(() => {
    // Load users from localStorage
    const savedUsers = localStorage.getItem("users")
    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          {
            username: "sharmi",
            password: "123"
          },
          {
            username: "abc",
            password: "123"
          }
        ]
  })

  // Save users to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<Login users={users} setusers={setusers} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup users={users} setusers={setusers} />}
          ></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App