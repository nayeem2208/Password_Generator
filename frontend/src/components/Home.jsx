import React, { useEffect } from "react";
import { useAuth } from "../userContext";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Generate from "./generate";
import ShowPassword from "./showPassword";
import usePasswordGenerator from "../passwordGenerator";

function Home() {
  let { user } = useAuth();
  const navigate = useNavigate();
  const {password,error,generatePassword}=usePasswordGenerator()
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div  >
      <div className=" flex justify-evenly m-4 mt-8">
        <Generate/>
       <ShowPassword/>
      </div>
    </div>
  );
}

export default Home;
