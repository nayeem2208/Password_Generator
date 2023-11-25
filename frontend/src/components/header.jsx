import React, { useEffect } from "react";
import applogo from "../assets/app-store.png";
import { useAuth } from "../userContext";
import { useNavigate } from "react-router-dom";
function Header() {
  const {user,setUser}=useAuth()
  const navigate=useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[user])
  const logoutHandler=()=>{
    localStorage.removeItem('PsUser')
    setUser(null)
  }
  return (
    <div
      className="w-full h-16 p-4 flex justify-between"
      style={{
        background:
          "linear-gradient(90deg,rgba(255,255,255,1) 0%, rgba(72,196,237,1) 67%)",
      }}
    >
      <div className="flex">
        <img src={applogo} alt="" className="w-8 h-8 ml-6 " />
        <h1 className="font-bold text-gray-600  text-xl">
          {" "}
          Password Generator
        </h1>
      </div>
      <button className="mr-12 font-bold text-white" onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Header;
