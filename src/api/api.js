import axios from 'axios';
import {serverDirection} from './auth.js';


const sendProviders = async (email, id) => {
    const request = await axios.post(`${serverDirection}/set/providers`, 
        {email, id}, 
        { withCredentials: true });
    console.log('here', request);
    return request.data;
};

const sendFavorites = async (email, id) =>{
    const request = await axios.post(`${serverDirection}/set/favorites`, 
        {email, id}, 
        { withCredential: true });
    return request.data;
};

const deleteFavorites = async (email, id) =>{
    const request = await axios.post(`${serverDirection}/set/deletefavorites`, 
        {email, id}, 
        { withCredentials: true });
    return request.data;
};


export {sendProviders, sendFavorites, deleteFavorites };
