"use client"

import { useState,useEffect } from "react"
import TodoForm from "./TodoForm.jsx"
import TodoCard from "./TodoCard.jsx"

const Tasks = () => {
    const [todos, setTodos] = useState([]);
    const [refresh, setRefresh] = useState(false); // toggle to refresh on CRUD

    const handleCreateTodo = async (data) => {
      // calling API to create todo
      await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify(data),
      });
    
      setRefresh(!refresh); // to refresh todo list
    };

    const handleDeleteTodo = async (id) => {
      await fetch(`/api/todos/${id}`, { method: "DELETE" });
      setRefresh(!refresh);
    };
    
    const handleEditTodo = (todo) => {
      setSelectedTodo(todo); // open form in edit mode
    };
    

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
      <TodoForm onSubmit={handleCreateTodo} />
        {/* Todos List for each Todo Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {todos.map((todo) => (
                 <TodoCard key={todo._id} 
                 onDelete={handleDeleteTodo}
                 onEdit={handleEditTodo}
                 todo={todo} onRefresh={() => setRefresh(!refresh)}/>
             ))}
        </div> 
    </div>
  )
}

export default Tasks
