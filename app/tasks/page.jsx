"use client"
import Tasks from "../components/Tasks.jsx";


const TasksPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Todos</h1>
      <Tasks />
    </div>
  )
}

export default TasksPage;
