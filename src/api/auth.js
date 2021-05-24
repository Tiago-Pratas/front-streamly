import axios from 'axios';

const serverDirection = 'http://localhost:5000';
const registerUrl = `${serverDirection}/auth/register`;
const loginUrl = `${serverDirection}/auth/login`;
const logoutUrl = `${serverDirection}/auth/logout`;

const register = async (userData) => {
    try {
        const request = await axios.post(registerUrl, userData, {withCredentials: true});

        console.log(request);
        
        return request.data;

    } catch (error) {
        console.log(error);
        return error;
    }

};

const login = async (userData) => {
    try {
        const request = await axios.post(loginUrl, userData, { withCredentials: true });
    
        return request.data;

    } catch (error) {
        return error;
    }
};

const logout = async () => {
    const request = await axios.post(logoutUrl);

    return request;
};

export {
    register,
    login,
    logout
};
