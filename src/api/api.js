import axios from 'axios';
import {serverDirection} from './auth.js';


const sendProviders = async (email, id) => {
    const request = await axios.post(`${serverDirection}/set/providers`, 
        {email, id}, 
        { withCredentials: true });
    console.log('here', request);
    return request;
};

const sendFavorites = async (email, id) =>{
    const request = await axios.post(`${serverDirection}/set/favorites`, 
        {email, id}, 
        { withCredential: true });
    return request;
};

const deleteFavorites = async (email, id) =>{
    const request = await axios.post(`${serverDirection}/set/deletefavorites`, 
        {email, id}, 
        { withCredentials: true });
    return request;
};


export {sendProviders, sendFavorites, deleteFavorites };
