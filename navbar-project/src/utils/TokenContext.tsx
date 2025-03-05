import React, { createContext, useState, useContext } from 'react';

// interface TokenContextType {
//   token: string | null;
//   setToken: React.Dispatch<React.SetStateAction<string | null>>;
// }


// interface TokenProviderProps {
//   children: React.ReactNode;
// }

// const TokenContext = createContext<TokenContextType | undefined>(undefined);
const TokenContext = createContext<any>({token:null});

// export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  export const TokenProvider = ({ children } : any) => {

  const [token, setToken] = useState<string | null>(localStorage.getItem('accessToken'));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

// export const useToken = (): TokenContextType => {
  export const useToken = () => {

  const context = useContext(TokenContext);
  // if (!context) {
  //   throw new Error('useToken must be used within a TokenProvider');
  // }
  return context;
};
