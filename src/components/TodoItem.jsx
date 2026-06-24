import { useState } from "react"

function TodoItem({ id, activity, index, activityArr, setActivityArr, priority, dueDate, completed }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedActivity, setEditedActivity] = useState(activity)

  function handleDelete(deleteId) {
    const temparr = activityArr.filter((item) => item.id !== deleteId)
    setActivityArr(temparr)
  }

  function toggleComplete(toggleId) {
    const updatedArr = activityArr.map((item) =>
      item.id === toggleId ? { ...item, completed: !item.completed } : item
    )
    setActivityArr(updatedArr)
  }

  function handleEditSave() {
    if (editedActivity.trim() === "") {
      alert("Task cannot be empty")
      return
    }
    const updatedArr = activityArr.map((item) =>
      item.id === id ? { ...item, activity: editedActivity } : item
    )
    setActivityArr(updatedArr)
    setIsEditing(false)
  }

  const getPriorityBadge = (p) => {
    const colors = {
      high: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700",
      medium: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700",
      low: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700"
    }
    return colors[p] || colors.medium
  }

  return (
    <div className={`${completed ? "opacity-75" : ""} animate-slide-in`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg border-l-4 border-sky-500 p-4 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-start gap-4">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleComplete(id)}
            className="mt-1 w-5 h-5 cursor-pointer accent-sky-500"
          />

          {/* Task Content */}
          <div className="flex-1">
            {isEditing ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editedActivity}
                  onChange={(e) => setEditedActivity(e.target.value)}
                  autoFocus
                  className="flex-1 px-3 py-2 border border-sky-500 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={handleEditSave}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p className={`${completed ? "line-through text-gray-400" : "text-gray-800 dark:text-white"} font-medium text-lg`}>
                  {index + 1}. {editedActivity}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {priority && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getPriorityBadge(priority)}`}>
                      {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                    </span>
                  )}
                  {dueDate && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700">
                      📅 {new Date(dueDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/30 rounded-lg transition-colors font-medium text-sm"
                title="Edit task"
              >
                ✏️
              </button>
            )}
            <button
              onClick={() => handleDelete(id)}
              className="px-3 py-2 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/30 rounded-lg transition-colors font-medium text-sm"
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem