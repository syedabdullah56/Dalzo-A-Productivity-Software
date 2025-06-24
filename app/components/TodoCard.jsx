'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const TodoCard = ({ todo, refetchTodos }) => {
  const date = todo.date?.slice(0, 10);
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/todos/${todo._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Deleted ✅");
        refetchTodos();
      } else {
        alert("Failed to delete ❌");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleComplete = async () => {
    try {
      const res = await fetch(`/api/todos/${todo._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      });

      if (res.ok) {
        alert("Marked as completed ✅");
        refetchTodos();
      } else {
        alert("Failed to mark complete ❌");
      }
    } catch (err) {
      console.error("Complete error:", err);
    }
  };

  const handleEdit = () => {
    router.push(`/tasks/edit?id=${todo._id}`);
  };

  return (
    <div className="bg-gray-300 text-black w-full p-3 rounded-md shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 hover:bg-gray-400 transition-all duration-200">
      
      <div className="flex-1 overflow-hidden">
        <p className="font-bold text-lg break-words">{todo.title}</p>
        <p className="text-sm break-words">{todo.description}</p>
        <p className="text-gray-500 text-xs mt-1">Due Date: {date}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded text-sm hover:bg-yellow-600"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-green-600 text-white px-2 py-1 rounded text-sm hover:bg-green-700"
          onClick={handleComplete}
        >   
          Complete?
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
