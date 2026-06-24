import { useState } from "react"

function AddTodoForm({ activityArr, setActivityArr }) {
  const [newactivity, setNewactivity] = useState("")
  const [priority, setPriority] = useState("medium")
  const [dueDate, setDueDate] = useState("")
  const [showForm, setShowForm] = useState(false)

  function handleChange(evt) {
    setNewactivity(evt.target.value)
  }

  function addActivity(evt) {
    evt.preventDefault()
    
    if (newactivity.trim() === "") {
      alert("Please enter a task")
      return
    }

    setActivityArr([
      ...activityArr,
      {
        id: Date.now(),
        activity: newactivity,
        priority: priority,
        dueDate: dueDate,
        completed: false,
        createdAt: new Date().toLocaleDateString()
      }
    ])
    
    setNewactivity("")
    setPriority("medium")
    setDueDate("")
    setShowForm(false)
  }

  return (
    <div className="animate-fade-in w-full">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-navy-500 dark:text-sky-400">
            ➕ Add New Task
          </h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="text-gray-500 hover:text-navy-500 transition-colors"
          >
            {showForm ? "✕" : "+"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={addActivity} className="space-y-4 animate-slide-in">
            {/* Task Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Task Name *
              </label>
              <input
                type="text"
                value={newactivity}
                onChange={handleChange}
                placeholder="What do you want to accomplish?"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
              />
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Priority Level
              </label>
              <div className="flex gap-3">
                {["low", "medium", "high"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 py-2 px-3 rounded-lg font-medium capitalize transition-all ${
                      priority === p
                        ? p === "high" ? "bg-red-500 text-white" : p === "low" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:text-white transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-navy-500 to-sky-500 hover:from-navy-600 hover:to-sky-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              Add Task
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default AddTodoForm