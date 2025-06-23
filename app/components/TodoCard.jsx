'use client'
import React from 'react'

const TodoCard = ({todo}) => {
  const date = todo.date.slice(0, 10);

  return (
    <div className="text-white w-[95%] h-[11vh] todoCard rounded-md shadow-md hover:bg-gray-200 flex flex-row justify-between items-center p-1">
      
      <div>
       <p className='font-bold'>{todo.title}</p>
       <p className=' text-sm'>{todo.description}</p>
       <p className='text-gray-200 text-[1.4vh]'>Due Date: {date}</p>
      </div>
   
      <div className='flex gap-x-1'>
      <button className="mt-2 bg-gray-700 text-white rounded p-0.5">Edit</button>
      <button className="mt-2 bg-red-500 text-white rounded p-0.5">Delete</button>
      <button className="mt-2 bg-green-500 text-white rounded p-0.5">Completed</button>
      </div>
      
    </div>  
  )
}

export default TodoCard
