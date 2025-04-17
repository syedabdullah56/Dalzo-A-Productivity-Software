import React from 'react'

const getPriorityColor = (priority) => {
  switch (priority) {
    case "low":
      return "bg-green-200 text-green-800";
    case "medium":
      return "bg-yellow-200 text-yellow-800";
    case "high":
      return "bg-red-200 text-red-800";
    default:
      return "";
  }
};



const TodoCard = ({todo,onDelete,onEdit}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-2 transition hover:shadow-lg">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">{todo.title}</h3>
      <span
        className={`text-sm px-3 py-1 rounded-full ${getPriorityColor(todo.priority)}`}
      >
        {todo.priority.toUpperCase()}
      </span>
    </div>
    <p className="text-gray-600">Date: {todo.date}</p>
    <p className="text-gray-500 text-sm">Status: {todo.status}</p>

    <div className="flex space-x-2 mt-3">
      <button
        onClick={() => onEdit(todo)}
        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-1 rounded-lg"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(todo._id)}
        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg"
      >
        Delete
      </button>
    </div>
  </div>
  )
}

export default TodoCard