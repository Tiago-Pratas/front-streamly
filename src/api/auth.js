import axios from 'axios';

export const serverDirection = 'http://localhost:5000';

const registerUrl = `${serverDirection}/auth/register`;
const loginUrl = `${serverDirection}/auth/login`;
const logoutUrl = `${serverDirection}/auth/logout`;
const checkSessionUrl = `${serverDirection}/auth/check-session`;

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



const checkSession = async () => {
    try {
        const request = await axios.get(checkSessionUrl, {withCredentials: true});
        return request.data;

    } catch (error) {
        return error;
    }
};

const logout = async (user) => {
    const request = await axios.post(logoutUrl, user, {withCredentials: true});

    return request;
};

const sendEmailValidation = async (validationUrl) => {
    const request = await axios.post(validationUrl);

    return request;
};

export {
    register,
    login,
    logout,
    checkSession,
    sendEmailValidation
};
