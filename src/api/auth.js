import axios from 'axios';

const serverDirection = 'http://localhost:5000';
const registerUrl = `${serverDirection}/auth/register`;
const loginUrl = `${serverDirection}/auth/login`;
const logoutUrl = `${serverDirection}/auth/logout`;

const register = async (userData) => {
    try {
        const request = await axios.post(registerUrl, userData);
    
        console.log(request.data);
    
        if(!request.ok) {
            throw new Error(request.message);
        
        } 
        return request;
        
    } catch (err) {
        return err;
    }

};

const login = async (userData) => {
    const request = await axios.post(loginUrl, userData);

    if (!request.ok) {
        throw new Error(request.message);
    }

    return request;
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
