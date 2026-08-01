import React, { use } from 'react';
import AuthContext from '../Contexts/AuthContexts/AuthContexts';


const useAuth = () => {
    const AuthInfo = use(AuthContext);
    return AuthInfo;
};

export default useAuth; 