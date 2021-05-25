import axios from 'axios';

const sendProviders = async ({id}) => {
    const request = await axios.post('http://localhost:5000/providers/set', {params:{
        id
    }});


    return request;
};

export {sendProviders};