import React from "react"; 
import { createContext, useContext, ReactNode, useState } from "react";

interface User {
    name : string,
    email : string
}


// interface UserContextType {
//     user: User | null;
//     updateUser: (userData: User) => void;
//   }
  

  const UserContext = createContext({});

// const UserContext = createContext<UserContextType | undefined>(undefined);
// const UserContext = createContext("");
// interface UserProviderProps {
//     children: ReactNode;
//   }
  


//   export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    export const UserProvider = ({ children } : any) => {

    const [user, setUser] = useState<User | null>(null);
  
    const updateUser = (userData: User) => {
      setUser(userData);
    };
  
    return (
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  // Custom hook to use the User context
  export const useUser = (): any => {

//   export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };