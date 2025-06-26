import axios from 'axios';

export async function Login(email: string, password: string) {
    try {
        const res = await axios.post('/api/auth/login', { email, password });
        return { success: true, data: res.data };
    }
    catch(err) {
        const res = err as { response : { data: string }};
        return { success: false, error: res.response.data };
    }
}

export async function Logout() {
    await axios.get('/api/auth/logout');

    window.location.reload();
}

export async function Register(login: string, email: string, password: string) {
    try {
        const res = await axios.post('/api/auth/register', { login, email, password });
        return { success: true, data: res.data };
    }
    catch(err) {
        const res = err as { response : { data: string }};
        return { success: false, error: res.response.data };
    }
}

export async function getStoredUser() {
    try {
        const res = await axios.get('/api/user');
        return { loggedIn: true, data: res.data };
    }
    catch(err) {
        return { loggedIn: false };
    }
}