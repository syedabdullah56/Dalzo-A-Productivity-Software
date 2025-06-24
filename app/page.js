"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bodyColor min-h-screen w-full flex flex-col items-center justify-start pt-16 px-4">
      {/* Hero Heading */}
      <div className="text-center mb-10">
        <h1 className="headingSpan1 text-[3.2rem] sm:text-[3.5rem] md:text-[4.2rem] leading-tight">
          Take Your Productivity
        </h1>
        <h1 className="headingSpan2 text-[3.2rem] sm:text-[3.5rem] md:text-[4.2rem] leading-tight">
          To The Moon 🚀
        </h1>
      </div>

      {/* CTA Button */}
      <Link
        href="/tasks"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-semibold transition duration-300 mb-12"
      >
        Get Started
      </Link>

      {/* About Section */}
      <div className="max-w-3xl text-center text-gray-200 mb-16">
        <h2 className="text-2xl font-bold mb-2">What is Dalzo?</h2>
        <p className="text-md leading-relaxed">
          Dalzo helps you manage your daily tasks and priorities with ease.
          Whether you're a student, developer, or entrepreneur — stay focused,
          stay productive, and crush your goals every day with a clean,
          minimal, and powerful Todo system.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mb-20">
        {[
          {
            title: "Quick Add",
            desc: "Easily add tasks with title, description, date & priority.",
            color: "from-purple-600 to-indigo-600",
          },
          {
            title: "Smart Updates",
            desc: "Edit, complete or delete tasks on the fly.",
            color: "from-green-500 to-teal-500",
          },
          {
            title: "Fully Responsive",
            desc: "Looks perfect on phones, tablets and desktops.",
            color: "from-pink-500 to-rose-500",
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg shadow-lg bg-gradient-to-br ${card.color} text-white`}
          >
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );   
}


// export default function Home() {
//   return (
//     <div className="bodyColor  parent-container h-screen w-screen">




//       {/* Spans Container of My Main Heading */}
//       <div className="spanContainer  flex justify-center items-center flex-col">
//            <h1 className="headingSpan1  text-[3.5vmax] md:text-[4.2vmax]">Take Your Productivity</h1>
//            <h1 className="headingSpan2  text-[3.5vmax] md:text-[4.2vmax]">To Moon</h1>
//       </div>
    
//     </div>
//   );
// }   
