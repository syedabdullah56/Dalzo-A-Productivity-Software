"use client"
import React,{useState,useEffect} from "react";
import TodoCard from "../components/TodoCard.jsx";
import Link from "next/link";

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

      <div className="w-[90vw] p-6 flex flex-col justify-start items-center  gap-y-[1vh] bg-gray-100 rounded-xl shadow-lg md:w-[45vw]  ">

      
        <h1 className="text-3xl font-bold mb-4 ">{`${userName} Tasks`}</h1>

      
            <Link href="/tasks/add" className="w-[95%] h-[10%] mt-4 linkTaskAdd rounded-md shadow-md  flex justify-center items-center text-2xl font-bold mb-4 text-white transition-all">+ Add Todo</Link>
            


          {/* TodoCard */}
            <TodoCard/>
          

      

      </div>
    </div>
  );
};

export default TasksPage;
