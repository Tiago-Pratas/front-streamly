import React, { useEffect, useState } from 'react';
import './Loading.scss';

const Loading = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 6000);
    }, []);

    return (
        <>
            { loading &&
                <div className="loading background-blue">
                    <h1 className="loading__title">Streamly</h1>
                </div>
            }
        </>
    );
};
 
export default Loading;
