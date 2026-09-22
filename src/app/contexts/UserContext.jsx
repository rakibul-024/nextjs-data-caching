
'use client'
import { createContext } from 'react';
import React from 'react';

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
    return (
        <UserContext.Provider value="tomato">
            {children} 
        </UserContext.Provider>
    );
};