import { getStoredUserServer } from "@/data/session";

export async function GET() {
    const user = await getStoredUserServer();
    if(user) return Response.json(user);
    return new Response(null, { status: 401 });
}