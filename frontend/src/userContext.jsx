// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    if(localStorage.getItem('PsUser')){
        setUser(localStorage.getItem('PsUser'))
    }
  },[])

  return (
    <AuthContext.Provider value={{ user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
