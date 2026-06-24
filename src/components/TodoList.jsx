import { useState } from "react"
import TodoItem from "./TodoItem"

function TodoList({ activityArr, setActivityArr }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPriority, setFilterPriority] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [showCompleted, setShowCompleted] = useState(true)

  // Filter activities
  let filteredArr = activityArr.filter((item) => {
    const matchesSearch = item.activity.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPriority = filterPriority === "all" || item.priority === filterPriority
    const matchesCompleted = showCompleted || !item.completed
    return matchesSearch && matchesPriority && matchesCompleted
  })

  // Sort activities
  if (sortBy === "priority") {
    const priorityOrder = { high: 0, medium: 1, low: 2 }
    filteredArr.sort((a, b) => (priorityOrder[a.priority] || 1) - (priorityOrder[b.priority] || 1))
  } else if (sortBy === "newest") {
    filteredArr.reverse()
  }

  const completedCount = activityArr.filter((item) => item.completed).length
  const totalCount = activityArr.length

  return (
    <div className="w-full animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-navy-500 dark:text-sky-400">
              📋 Today's Tasks
            </h2>
            <div className="text-right">
              <p className="text-2xl font-bold text-sky-500">{completedCount}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">of {totalCount} completed</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-navy-500 to-sky-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${totalCount === 0 ? 0 : (completedCount / totalCount) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="space-y-3 mb-6">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="🔍 Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
            />
          </div>

          {/* Filter and Sort Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white text-sm font-medium"
            >
              <option value="all">All Priorities</option>
              <option value="high">High 🔴</option>
              <option value="medium">Medium 🟡</option>
              <option value="low">Low 🟢</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white text-sm font-medium"
            >
              <option value="newest">Newest First</option>
              <option value="priority">By Priority</option>
            </select>

            <button
              onClick={() => setShowCompleted(!showCompleted)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                showCompleted
                  ? "bg-sky-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {showCompleted ? "Show All" : "Hide Completed"}
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {filteredArr.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {activityArr.length === 0
                  ? "✨ No tasks yet. Add one to get started!"
                  : "🎉 No tasks match your filters"}
              </p>
            </div>
          ) : (
            filteredArr.map((item, index) => (
              <TodoItem
                key={item.id}
                id={item.id}
                activity={item.activity}
                index={index}
                activityArr={activityArr}
                setActivityArr={setActivityArr}
                priority={item.priority}
                dueDate={item.dueDate}
                completed={item.completed}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoList