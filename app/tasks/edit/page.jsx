"use client";

import { Suspense } from "react";

export default function EditPage() {
  return (
    <Suspense fallback={<div>Loading edit form...</div>}>
      <EditFormWrapper />
    </Suspense>
  );

}

// Child Component that uses useSearchParams
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function EditFormWrapper() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const todoId = searchParams.get("id");

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchTodoData = async () => {
      const userRes = await fetch("/api/todos");
      const userData = await userRes.json();
      setUserId(userData.userId);
      setUserName(userData.userName);
      setUserEmail(userData.userEmail);

      const todoRes = await fetch(`/api/todos/${todoId}`);
      const todo = await todoRes.json();
      setTitle(todo.title);
      setDescription(todo.description);
      setDate(todo.date?.slice(0, 10));
      setPriority(todo.priority);
      setStatus(todo.status);
    };

    if (todoId) fetchTodoData();
  }, [todoId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedTodo = {
      userId,
      userEmail,
      userName,
      title,
      description,
      date,
      priority,
      status,
    };

    try {
      const res = await fetch(`/api/todos/${todoId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      });

      if (res.ok) {
        alert("Todo Updated Successfully ✅");
        router.push("/tasks");
      } else {
        alert("Failed to update ❌");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center text-black">
      <div className="w-[80%] h-[70%] p-6 flex flex-col justify-start items-center bg-gray-100 rounded-xl shadow-lg md:w-[45vw]">
        <h1 className="text-3xl font-bold mb-4">Edit Task</h1>
        <form
          onSubmit={handleUpdate}
          className="w-[95%] h-[90%] flex flex-col justify-start items-center gap-y-[1vh]"
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-[80%] p-2 rounded-md border"
          />
          <textarea
            placeholder="Description (Optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-[80%] p-2 rounded-md border"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-[80%] p-2 rounded-md border"
          />

          <div className="w-[80%] flex flex-row justify-start items-center gap-x-2">
            <h2>Set Priority Level:</h2>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="p-2 rounded-md border"
            >
              <option value="low">Low 🥱</option>
              <option value="medium">Medium 😐</option>
              <option value="high">High 😡</option>
            </select>
          </div>

          <div className="w-[80%] flex flex-row justify-start items-center gap-x-2">
            <h2>Set Task Status:</h2>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 rounded-md border"
            >
              <option value="pending">Pending 😪</option>
              <option value="completed">Completed 😎</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-[40%] p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition mt-6"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}



// "use client";
// import { useSearchParams, useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";

// const page = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const todoId = searchParams.get("id");

//   const [userId, setUserId] = useState("");
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [priority, setPriority] = useState("medium");
//   const [status, setStatus] = useState("pending");

//   // Fetch user info and specific todo
//   const fetchTodoData = async () => {
//     try {
//       const userRes = await fetch("/api/todos");
//       const userData = await userRes.json();
//       setUserId(userData.userId);
//       setUserName(userData.userName);
//       setUserEmail(userData.userEmail);

//       const todoRes = await fetch(`/api/todos/${todoId}`);
//       const todo = await todoRes.json();
//       setTitle(todo.title);
//       setDescription(todo.description);
//       setDate(todo.date?.slice(0, 10));
//       setPriority(todo.priority);
//       setStatus(todo.status);
//     } catch (err) {
//       console.error("Error loading task:", err);
//     }
//   };

//   useEffect(() => {
//     if (todoId) {
//       fetchTodoData();
//     }
//   }, [todoId]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     const updatedTodo = {
//       userId,
//       userEmail,
//       userName,
//       title,
//       description,
//       date,
//       priority,
//       status,
//     };

//     try {
//       const res = await fetch(`/api/todos/${todoId}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedTodo),
//       });

//       if (res.ok) {
//         alert("Todo Updated Successfully ✅");
//         router.push("/tasks");
//       } else {
//         alert("Failed to update ❌");
//       }
//     } catch (error) {
//       console.error("Update error:", error);
//     }
//   };

//   return (
//     <div className="w-full h-screen flex justify-center text-black">
//       <div className="w-[80%] h-[70%] p-6 flex flex-col justify-start items-center bg-gray-100 rounded-xl shadow-lg md:w-[45vw]">
//         <h1 className="text-3xl font-bold mb-4">Edit Task</h1>

//         <form
//           onSubmit={handleUpdate}
//           className="w-[95%] h-[90%] flex flex-col justify-start items-center gap-y-[1vh]"
//         >
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-[80%] p-2 rounded-md border"
//           />

//           <textarea
//             placeholder="Description (Optional)"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-[80%] p-2 rounded-md border"
//           />

//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//             className="w-[80%] p-2 rounded-md border"
//           />

//           <div className="w-[80%] flex flex-row justify-start items-center gap-x-2">
//             <h2>Set Priority Level:</h2>
//             <select
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//               className="p-2 rounded-md border"
//             >
//               <option value="low">Low 🥱</option>
//               <option value="medium">Medium 😐</option>
//               <option value="high">High 😡</option>
//             </select>
//           </div>

//           <div className="w-[80%] flex flex-row justify-start items-center gap-x-2">
//             <h2>Set Task Status:</h2>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="p-2 rounded-md border"
//             >
//               <option value="pending">Pending 😪</option>
//               <option value="completed">Completed 😎</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-[40%] p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition mt-6"
//           >
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default page;
