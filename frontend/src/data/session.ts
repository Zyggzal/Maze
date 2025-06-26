import { cookies } from "next/headers";

export async function getStoredUserServer() {
    const user = (await cookies()).get('user');

    if(user) return JSON.parse(user.value);
    return null;
}

export async function storeUserInSession(data: any) {
    (await cookies()).set('user', JSON.stringify(data), {
        path: '/',
        maxAge: 60 * 60 * 24 * 2
    });
}

export async function removeUserFromSession() {
    console.log('delete');
    (await cookies()).delete('user');
}