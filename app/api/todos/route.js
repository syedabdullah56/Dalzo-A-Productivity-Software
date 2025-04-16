import {auth} from "@clerk/nextjs";
import dbConnect from "../../lib/dbConnect";
import Todo from "../../models/Todo";

// Get All Todos Of User
export async function GET(req) {
    await dbConnect();
    const {userId}=auth();
    if(!userId) return new Response("Unauthorized", {status:401});

    const todos=await Todo.find({userEmail:userId});
    return Response.json(todos);
}

// Create Todo
export async function POST(req) {
    await dbConnect();
    const {userId}=auth();
    if(!userId) return new Response("Unauthorized", {status:401});

    const body=await req.json();
    const todo=await Todo.create({...body,userEmail:userId});
    return Response.json(todo);
}



