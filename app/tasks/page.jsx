"use client";
import React, { useState, useEffect } from "react";
import TodoCard from "../components/TodoCard.jsx";
import Link from "next/link";

const TasksPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    setUserName(data.userName);
    setUserEmail(data.userEmail);
    setTodos(data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center text-black">
      <div className="w-[90vw] h-[90vh] p-6 flex flex-col justify-start items-center gap-y-4 bg-gray-100 rounded-xl shadow-lg md:w-[45vw]">
        <h1 className="text-3xl font-bold mb-1">{`${userName} Tasks`}</h1>
        <p className="mb-2">Email: {userEmail}</p>

        <Link
          href="/tasks/add"
          className="w-[95%] h-[8%] linkTaskAdd rounded-md shadow-md flex justify-center items-center text-2xl font-bold text-white bg-blue-500 hover:bg-blue-600 transition-all"
        >
          + Add Todo
        </Link>

        {/* Scrollable Todo List */}
        <div className="w-full h-[65vh] overflow-y-auto flex flex-col gap-y-4 pr-1">
          {todos && todos.map((todoItem) => (
            <TodoCard key={todoItem._id} todo={todoItem} refetchTodos={fetchTodos} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
