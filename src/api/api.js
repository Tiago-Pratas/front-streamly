import axios from 'axios';


const sendProviders = async (email, id) => {
    const request = await axios.post('http://localhost:5000/providers/set', {email, id});
    console.log('here', request);
    return request;
};

export { sendProviders };