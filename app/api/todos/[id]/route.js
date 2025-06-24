import dbConnect from "@/app/lib/dbConnect";
import Todo from "@/app/models/Todo";
import { NextResponse } from "next/server";

// DELETE TODO BY ID
export async function DELETE(req, { params }) {
  await dbConnect();
  await Todo.findByIdAndDelete(params.id);
  return new NextResponse("Deleted", { status: 200 });
}

// GET SINGLE TODO BY ID
export async function GET(req, { params }) {
  await dbConnect();
  const todo = await Todo.findById(params.id);
  return NextResponse.json(todo);
}


// PATCH TO UPDATE FULL TODO
export async function PATCH(req, { params }) {
  await dbConnect();
  const {
    title,
    description,
    date,
    priority,
    status,
    userId,
    userName,
    userEmail,
  } = await req.json();

  const updatedTodo = await Todo.findByIdAndUpdate(
    params.id,
    {
      title,
      description,
      date,
      priority,
      status,
      userId,
      userName,
      userEmail,
    },
    { new: true }
  );

  return NextResponse.json(updatedTodo);
}