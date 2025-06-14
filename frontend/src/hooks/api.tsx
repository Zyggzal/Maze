'use client';

import { useState } from "react";
import api from "../config/api";
import axios from "axios";

export default function useAPI() {
    const Login = async (email: string, password: string) => {
        try {
            const request = `${api.host}/auth/login`;
            const response = await axios.post(request, { email, password });

            const data = response.data;
            const status = response.status;

            return { status, data };
        }
        catch(err: any) {
            const status = err.response.status;
            const message = err.response.data.message;
            
            return { status, message };
        }
    }

    const Logout = async () => {
        try {
            const request = `${api.host}/auth/logout`;
            const response = await axios.post(request);

            const data = response.data;
            const status = response.status;

            return { status, data };
        }
        catch(err: any) {
            const status = err.response.status;
            const message = err.response.data.message;
            
            return { status, message };
        }
    }
    const Register = async (login: string, email: string, password: string) => {
        try {
            const request = `${api.host}/auth/register`;
            const response = await axios.post(request, { login, email, password });
            
            const data = response.data;
            const status = response.status;

            return { status, data };
        }
        catch(err: any) {
            const status = err.response.status
            const message = err.response.data.message
            
            return { status, message };
        }
    }

    const Get = async (path: string) => {
        try {
            const request = `${api.host}/${path}`;
            const response = await axios.get(request);
            
            const data = response.data;
            const status = response.status;

            return { status, data };
        }
        catch(err: any) {
            const status = err.response.status;
            const message = err.response.data.message;
            
            return { status, message };
        }
    }
    
    const Post = async (path: string, params: any) => {
        try {
            const request = `${api.host}/${path}`;
            const response = await axios.post(request, params);

            const data = response.data;
            const status = response.status;

            return { status, data };
        }
        catch(err: any) {
            const status = err.response.status;
            const message = err.response.data.message;
            
            return { status, message };
        }
    }

    const Patch = async (path: string, params: any) => {
        try {
            const request = `${api.host}/${path}`;
            const response = await axios.patch(request, params);
 
            const data = response.data;
            const status = response.status;

            return { status, data };
        }
        catch(err: any) {
            const status = err.response.status;
            const message = err.response.data.message;
            
            return { status, message };
        }
    }

    const Delete = async (path: string, payload: any) => {
        try {
            const request = `${api.host}/${path}`;
            const response = await axios.delete(request, { data: payload });

            const data = response.data;
            const status = response.status;

            return { status, data };
        }
        catch(err: any) {
            const status = err.response.status;
            const message = err.response.data.message;
            
            return { status, message };
        }
    }

    return {
        Login,
        Logout,
        Register,
        Get,
        Post,
        Patch,
        Delete
    }
}