import axios from 'axios';

const serverDirection = 'http://localhost:5000';

const registerUrl = `${serverDirection}/auth/register`;
const loginUrl = `${serverDirection}/auth/login`;
const logoutUrl = `${serverDirection}/auth/logout`;

export const register = async (userData) => {
    const request = await axios.post(registerUrl, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
        data: userData,
    });

    const response = await request.json();

    if(!request.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const login = async (userData) => {
    const request = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
    });

    const response = await request.json();

    if (!request.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const logout = async () => {
    const request = await fetch(logoutUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
    });

    const response = await request.json();

    return response;
};
