import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState, useEffect } from "react"

function TodoContainer() {
  const [activityArr, setActivityArr] = useState(() => {
    // Load from localStorage
    const saved = localStorage.getItem("activityArr")
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            activity: "Complete project documentation",
            priority: "high",
            dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            completed: false
          },
          {
            id: 2,
            activity: "Review team feedback",
            priority: "medium",
            dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            completed: false
          },
          {
            id: 3,
            activity: "Update personal portfolio",
            priority: "low",
            dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            completed: false
          }
        ]
  })

  // Save to localStorage whenever activities change
  useEffect(() => {
    localStorage.setItem("activityArr", JSON.stringify(activityArr))
  }, [activityArr])

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-navy-500 to-navy-600 rounded-xl p-6 shadow-lg text-white">
          <h3 className="text-sm font-medium opacity-90 mb-2">Total Tasks</h3>
          <p className="text-4xl font-bold">{activityArr.length}</p>
        </div>
        <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl p-6 shadow-lg text-white">
          <h3 className="text-sm font-medium opacity-90 mb-2">Completed</h3>
          <p className="text-4xl font-bold">{activityArr.filter(t => t.completed).length}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 shadow-lg text-white">
          <h3 className="text-sm font-medium opacity-90 mb-2">High Priority</h3>
          <p className="text-4xl font-bold">{activityArr.filter(t => t.priority === "high" && !t.completed).length}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
        </div>
        <div className="lg:col-span-2">
          <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
        </div>
      </div>
    </div>
  )
}

export default TodoContainer