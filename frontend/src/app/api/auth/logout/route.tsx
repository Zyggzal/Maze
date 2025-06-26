import { removeUserFromSession } from "@/data/session";

export async function GET() {
    await removeUserFromSession();
    
    return new Response(null, { status: 200 });
}