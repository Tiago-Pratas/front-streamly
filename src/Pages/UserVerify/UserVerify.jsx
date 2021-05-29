import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sendEmailValidation } from '../../api/auth';
import { EmailConfirmation } from '../../components/index';

const userVerify = () => {
    const [confirmation, setConfirmation] = useState('');

    const params = useParams();
    console.log('hi', params.email, params.token);

    
    useEffect(() => {
        sendEmailValidation(params.email, params.token)
            .then(data => setConfirmation(data)).then(res => console.log(res)); 
    }, []);


    return (
        <EmailConfirmation  confirmation={confirmation}/>    
    );
};

export default userVerify ;