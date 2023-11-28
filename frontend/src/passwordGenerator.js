import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = (check, len) => {
    let charset = "",
      generatedPassword = "";
    const selected = Object.keys(check).filter((key) => check[key] === true);
    if (selected.length === 0) {
      setError("Please select a option");
      setPassword("");
      return;
    }

    selected.forEach((option) => {
        switch (option) {
          case "cap":
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
          case "low":
            charset += "abcdefghijklmnopqrstuvwxyz";
            break;
          case "num":
            charset += "0123456789";
            break;
          case "special":
            charset += "!@#$%^&*()";
            break;
          default:
            break;
        }
      });
  
    for(let i=0;i<len;i++){
        let randomIndex=Math.floor(Math.random()*charset.length)
        generatedPassword+=charset[randomIndex]
    }
    
    setPassword(generatedPassword)
    setError('')
  };
  return { password, error, generatePassword,setPassword };
};

export default usePasswordGenerator;
