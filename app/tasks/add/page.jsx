"use client"

import React,{useState,useEffect} from 'react'

const page = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("medium");
    const [status, setStatus] = useState("pending");


    const fetchTodos=async ()=>{
      const response = await fetch('/api/todos');
      const data = await response.json();
      setUserName(data.userName);
      setUserEmail(data.userEmail);     
    }
  
    useEffect(() => {
      fetchTodos();
    }, [])
    
    

    const handleSubmit=async(e)=>{

      e.preventDefault();
      
      const newTodo={
        userEmail,
        userName,
        title,
        description,
        date,
        priority,
        status
      }
      try {
        const response = await fetch('/api/todos', {  // assuming POST route
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTodo),
        });
  
        if (response.ok) {
          console.log("Todo added successfully!");
          // Resetting The Form After Submission To Submit new Todos
          setTitle("");
          setDescription("");
          setDate("");
          setPriority("medium");
          setStatus("pending");
        } else {
          console.error("Failed to add todo");
        }
      } catch (error) {
        console.error("Error submitting todo:", error);
      }
    }

    
    return (   
      <div className="w-full h-screen flex justify-center  text-black">
     
           <div className="w-[80%] h-[70%] p-6 flex flex-col justify-start items-center  bg-gray-100 rounded-xl shadow-lg md:w-[45vw]">
     
           
             <h1 className="text-3xl font-bold mb-4 ">Add a Task</h1>

             <form 
             onSubmit={handleSubmit}
             className="w-[95%] h-[90%] flex flex-col justify-start items-center  gap-y-[1vh] "
             >  

              {/* Title Of Todo */}
              <input
               type="text" 
               placeholder='Title'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               required
               className="w-[80%] p-2 rounded-md border"
              />

              {/* Description Of Todo */}
              <textarea
              type="text" 
              placeholder='Description (Optional)'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-[80%] p-2 rounded-md border"
              />

              {/* Date Of Todo */}
              <input
              type="date" 
              placeholder='Date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-[80%] p-2 rounded-md border"
              />


              {/* Priority Of Todo */}    
              <div className='w-[80%] flex flex-row justify-start items-center gap-x-2'>
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

            

              
              {/* Status Of Todo */}
              <div className='w-[80%] flex flex-row justify-start items-center gap-x-2'>
              <h2 className=''>Set Task Status:</h2>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                
                className="p-2 rounded-md border"
                >
                <option value="pending">Pending 😪</option>
                <option value="completed">Completed 😎</option>
              </select>
              </div>


              {/* Submit Button */}
              <button type="submit" className="w-[40%] p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition mt-6">Submit</button>
              

             </form>


     
    
     
           </div>
         </div>
  )
}

export default page
