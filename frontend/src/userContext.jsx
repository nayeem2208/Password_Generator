// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allPassword,setallPassword]=useState([])
  const [refresh,setRefresh]=useState(false)

  useEffect(()=>{
    if(localStorage.getItem('PsUser')){
        setUser(localStorage.getItem('PsUser'))
    }
  },[])

  return (
    <AuthContext.Provider value={{ user,setUser ,allPassword,setallPassword,refresh,setRefresh}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
