import axios from "axios";
import api from "../config/api";

export async function Get(path: string) {
    try {
        const request = `${api.host}/${path}`;
        const response = await axios.get(request);
        
        const data = response.data;
        const status = response.status;

        return { status, data };
    }
    catch(err: any) {
        const status = err.response.status;
        const error = err.response.data.error;
        
        return { status, error };
    }
}

export async function Post(path: string, params: any) {
    try {
        const request = `${api.host}/${path}`;
        const response = await axios.post(request, params);

        const data = response.data;
        const status = response.status;

        return { status, data };
    }
    catch(err: any) {
        const status = err.response.status;
        const error = err.response.data.error;
        
        return { status, error };
    }
}

export async function Patch(path: string, params: any) {
    try {
        const request = `${api.host}/${path}`;
        const response = await axios.patch(request, params);

        const data = response.data;
        const status = response.status;

        return { status, data };
    }
    catch(err: any) {
        const status = err.response.status;
        const error = err.response.data.error;
        
        return { status, error };
    }
}

export async function Delete(path: string, payload: any) {
    try {
        const request = `${api.host}/${path}`;
        const response = await axios.delete(request, { data: payload });

        const data = response.data;
        const status = response.status;

        return { status, data };
    }
    catch(err: any) {
        const status = err.response.status;
        const error = err.response.data.error;
        
        return { status, error };
    }
}