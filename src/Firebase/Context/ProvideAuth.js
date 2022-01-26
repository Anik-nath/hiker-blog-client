import React, { createContext } from 'react';
import useFirebase from '../Hook/useFirebase';
export const authContext = createContext();

const ProvideAuth = ({ children }) => {
    const auth = useFirebase();
    return (
        <authContext.Provider value={auth}>
           { children }
        </authContext.Provider>
    );
};

export default ProvideAuth;