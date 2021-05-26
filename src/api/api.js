import axios from 'axios';
import {serverDirection} from './auth.js';


const sendProviders = async (email, id) => {
    const request = await axios.post(`${serverDirection}/data/set`, {email, id});
    console.log('here', request);
    return request;
};

const sendFavorites = async (email, id) =>{
    const request = await axios.post(`${serverDirection}/data/set-favorites`, {email, id});
    return request;
};

const deleteFavorites = async (email, id) =>{
    const request = await axios.post(`${serverDirection}/data/delete-favorites`, {email, id});
    return request;
};


export {sendProviders, sendFavorites, deleteFavorites };
