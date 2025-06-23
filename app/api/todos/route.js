import dbConnect from "../../../app/lib/dbConnect";
import Todo from "../../../app/models/Todo";
import { NextResponse } from 'next/server'
import { currentUser, auth } from '@clerk/nextjs/server'

// GET: Fetch todos only for the authenticated user
export async function GET(req) {

    try {
        await dbConnect();
        const { userId } = await auth() 
        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 })
          }

        const user = await currentUser();
        const todos = await Todo.find({userId});
        return NextResponse.json({
            todos,
            userName: user?.username || user?.fullName || "Anonymous",
            userEmail: user?.emailAddresses?.[0]?.emailAddress || "No Email",
          });
          
    } catch (error) {
        
        console.error("Error fetching todos:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

// POST: Create a new todo for the authenticated user
export async function POST(req) {
  try {
    await dbConnect();

    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const user = await currentUser();
    const { title, description, date, priority, status } = await req.json();

    const todo = new Todo({
      userId,
      userEmail: user?.emailAddresses?.[0]?.emailAddress || "No Email",
      userName: user?.username || user?.fullName || "Anonymous",
      title,
      description,
      date,
      priority,
      status,
    });

    await todo.save();

    return new NextResponse("Todo created successfully", { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

