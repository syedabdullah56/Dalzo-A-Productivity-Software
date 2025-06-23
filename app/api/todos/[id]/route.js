import dbConnect from "@/app/lib/dbConnect";
import Todo from "@/app/models/Todo";
import { NextResponse } from "next/server";

// DELETE TODO BY ID
export async function DELETE(req, { params }) {
  await dbConnect();
  await Todo.findByIdAndDelete(params.id);
  return new NextResponse("Deleted", { status: 200 });
}



// PATCH TO UPDATE STATUS OF TASK
export async function PATCH(req, { params }) {
  await dbConnect();
  const { status } = await req.json();
  const todo = await Todo.findByIdAndUpdate(params.id, { status }, { new: true });
  return NextResponse.json(todo);
}