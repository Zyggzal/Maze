import { storeUserInSession } from "@/data/session";
import { Post } from "@/services/api";

export async function POST(request: Request) {
    const data = await request.json();

    const res = await Post('auth/login', { email: data.email, password: data.password });

    if(res.status === 200) {
        await storeUserInSession(res.data);

        return new Response(res.data, {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    }
    else {
        return new Response(res.error, {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }
}