
import dbConnect from "../../lib/dbConnect";
// To Check mongodb is connected or not
export async function GET(req) {
  await dbConnect();

  return new Response(
    JSON.stringify({ message: "If you see this, DB connection worked!" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      }
    }
  );
}
  