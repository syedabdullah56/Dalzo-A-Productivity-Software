import React,{useState} from 'react'

const TodoForm = ({ onSubmit, initialData = {} }) => {

  const [title, setTitle] = useState("");
  const [date,setDate]=useState("");
  const [priority,setPriority]=useState("");

  const handleSubmit=(e)=>{
     e.preventDefault();
     onSubmit({title,date,priority});
     setTitle("");
     setDate("");
     setPriority("medium");

  }
  return (
    <form 
    onSubmit={handleSubmit}
    className='bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto space-y-5'
    >
       <h2 className="text-xl font-semibold text-gray-700 text-center">Add / Edit Todo</h2>

       <input
       type='text'
       placeholder='Enter title'
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
        className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
       />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      
      <select
        value={priority}
        placeholder="Select Priority"
        onChange={(e) => setPriority(e.target.value)}
        className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="low">🔥 Low</option>
        <option value="medium">⚡ Medium</option>
        <option value="high">🚀 High</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
      >
        Submit
      </button>



    </form>
  )
}

export default TodoForm