import React, { useState, useEffect } from 'react'; 
import Splash from '../screens/SplashScreen';
import ContadorStack from './ContadorStack';

const Validation = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []); 

    if (loading) return <Splash />;
    return <ContadorStack />;
}

export default Validation;
