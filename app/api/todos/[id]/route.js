import dbConnect from "../../../lib/dbConnect";
import Todo from "../../../models/Todo";


//Delete Todo
export async function DELETE(req, {params}) {
    await dbConnect();
    try {
        const { id } = params;
    
        const deletedTodo = await Todo.findByIdAndDelete(id);
    
        if (!deletedTodo) {
          return new Response("Todo not found", { status: 404 });
        }
    
        return Response.json({ message: "Todo deleted successfully" });
      } catch (error) {
        console.error("DELETE error:", error);
        return new Response("Failed to delete todo", { status: 500 });
      }

}


//Update Todo
export async function PATCH(req, {params}) {
    await dbConnect();
    try {
        const { id } = params;
    
        const body = await req.json();
    
        const updatedTodo = await Todo.findByIdAndUpdate(id, body, { new: true,runValidators: true });
    
        if (!updatedTodo) {
          return new Response("Todo not found", { status: 404 });
        }
    
        return Response.json(updatedTodo);
      } catch (error) {
        console.error("PATCH error:", error);
        return new Response("Failed to update todo", { status: 500 });
      }
}
