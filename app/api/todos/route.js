import dbConnect from "../../../app/lib/dbConnect";
import Todo from "../../../app/models/Todo";
import { NextResponse } from 'next/server'
import { currentUser, auth } from '@clerk/nextjs/server'

// Get All Todos
export async function GET(req) {

    try {
        await dbConnect();
        const { userId } = await auth()
        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 })
          }
        const userName = await currentUser()
        const todos = await Todo.find({});
        return NextResponse.json({
            todos,
            userName: userName?.username || userName?.fullName || "Anonymous"
          });
          
    } catch (error) {
        
        console.error("Error fetching todos:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

// export async function POST(req) {
//     try {
//         await dbConnect();

//         const { userEmail, userName, title, description, date, priority, status } = await req.json();
//         const todo = new Todo({ userEmail, userName, title, description, date, priority, status });
//         await todo.save();
//         return new Response("Todo created successfully", { status: 201 });
//     } catch (error) {
        
//         console.error("Error creating todo:", error);
//         return new Response("Internal Server Error", { status: 500 });
//     }
// }

