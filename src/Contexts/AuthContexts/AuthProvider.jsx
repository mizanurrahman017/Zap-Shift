import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../Firebase/Firebase.init';
// ami

const AuthProvider = ({children}) => {
    const registerUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth ,email,password)
    }

     const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
     }
     const AuthInfo = {
        registerUser,
        signInUser, 
     }

    return (
        <AuthContext value={AuthInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;