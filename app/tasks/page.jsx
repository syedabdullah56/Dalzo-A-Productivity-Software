"use client"
import React,{useState,useEffect} from "react";

const TasksPage = () => {
  const [userName, setUserName] = useState("");
  const fetchTodos=async ()=>{
    const response = await fetch('/api/todos');
    const data = await response.json();
    setUserName(data.userName);
  }

  useEffect(() => {
    fetchTodos();
  }, [])
  
  return (
    <div className="w-full h-screen flex justify-center  text-black">
      <div className="w-[90vw] p-6 flex flex-row justify-center  bg-gray-100 rounded-xl shadow-lg md:w-[45vw]">
        <h1 className="text-3xl font-bold mb-4">{`${userName} Tasks`}</h1>
      </div>
    </div>
  );
};

export default TasksPage;
