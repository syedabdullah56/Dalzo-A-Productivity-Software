'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const TodoCard = ({todo,refetchTodos}) => {
  const date = todo.date.slice(0, 10);
  const router = useRouter();

   // Handle Delete
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

  // Handle Mark as Completed
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

  // Handle Edit
    const handleEdit = () => {
    // Navigate to /tasks/edit with todo._id as query parameter
    router.push(`/tasks/edit?id=${todo._id}`);
  };

  return (
    <div className="text-white w-[95%] h-[11vh] todoCard rounded-md shadow-md hover:bg-gray-200 flex flex-row justify-between items-center p-1">
      
      <div>
       <p className='font-bold'>{todo.title}</p>
       <p className=' text-sm'>{todo.description}</p>
       <p className='text-gray-200 text-[1.4vh]'>Due Date: {date}</p>
      </div>    
   
      <div className='flex gap-x-1'>
      <button className="mt-2 bg-gray-700 text-white rounded p-0.5" onClick={handleEdit}>Edit</button>
      <button className="mt-2 bg-red-500 text-white rounded p-0.5" onClick={handleDelete}>Delete</button>
      <button className="mt-2 bg-green-500 text-white rounded p-0.5" onClick={handleComplete}>Completed?</button>
      </div>
      
    </div>  
  )
}

export default TodoCard
