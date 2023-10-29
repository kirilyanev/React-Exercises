import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext.js';

const isAuth = (WrappedComponent) => {
    
    const Component = (props) => {
        const { isAuthenticated } = useContext(AuthContext);
        const navigate = useNavigate();

        useEffect(() => {
            if (!isAuthenticated) {
                navigate('/login');
            }
            
        }, [isAuthenticated]);


        return <WrappedComponent {...props} />;
    };

    return Component;

};

export default isAuth;