import { useState } from 'react';

function useCredentials() {
    const getCredentials = () => {
        const credentialsString = localStorage.getItem('credentials');
        const credentials = JSON.parse(credentialsString);
        return credentials?.orderId;
    };

    const [orderId, setOrderId] = useState(getCredentials());

    const saveCredentials = (credentials) => {
        localStorage.setItem('credentials', JSON.stringify(credentials));
        setOrderId(credentials.orderId);
    };

    const clearCredentials = () => {
        localStorage.removeItem('credentials');
        setOrderId();
    };

    return { orderId, saveCredentials, clearCredentials };
}

export default useCredentials;
