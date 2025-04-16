"use client"

import { useState,useEffect } from "react"
import TodoForm from "./TodoForm.jsx"
import TodoCard from "./TodoCard.jsx"

const Tasks = () => {
    const [todos, setTodos] = useState([]);
    const [refresh, setRefresh] = useState(false); // toggle to refresh on CRUD

    //Fetch Todos From Backend
    useEffect(() => {
      const fetchTodos = async () => {
          try {
            const res=await fetch("/api/todos");
            const data=await res.json();
            setTodos(data);
          } catch (err) {
            console.error("Error fetching todos", err);
          }
      }
    }, [refresh])
    
  return (
    <div className="space-y-6">
      {/* Todo Form For Creating New Todo */}
      <TodoForm onRefresh={() => setRefresh(!refresh)}/>

        {/* Todos List for each Todo Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {todos.map((todo) => (
                 <TodoCard key={todo._id} todo={todo} onRefresh={() => setRefresh(!refresh)}/>
             ))}
        </div>
    </div>
  )
}

export default Tasks
