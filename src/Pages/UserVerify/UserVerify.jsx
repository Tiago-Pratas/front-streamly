import React, { useEffect, useState } from 'react';
import { sendEmailValidation } from '../../api/auth';
import { EmailConfirmation } from '../../components/index';

const UserVerify = (props) => {
    const [confirmation, setConfirmation] = useState('');
    const { params } = props.location;

    console.log('hi', params.email, params.token);
    
    useEffect(() => {
        sendEmailValidation(params.email, params.token)
            .then(data => setConfirmation(data)).then(res => console.log(res)); 
    }, []);

    return <EmailConfirmation  confirmation={confirmation}/>;
};

export default UserVerify ;