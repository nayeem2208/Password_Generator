import React, { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { useAuth } from "../userContext";
import axiosInstance from "../axios";
import animationData from "../assets/password- 1701073331480.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function ShowPassword() {
  const { user, allPassword, setallPassword, refresh, setRefresh } = useAuth();
  const [visiblePasswords, setVisiblePasswords] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let userid = typeof user === 'string' ? JSON.parse(user) : user.user;
        const url = `/getPasswords?user=${userid._id}`;
        let res = await axiosInstance.get(url);
        setallPassword(res.data.password);
        setVisiblePasswords(new Array(res.data.password.length).fill(false));
        setRefresh(false);
      } catch (error) {
        console.error("Error fetching passwords:", error);
      }
    };
    fetchData();
  }, [user,refresh]);

  const togglePasswordVisibility = (index) => {
    const updatedVisiblePasswords = [...visiblePasswords];
    updatedVisiblePasswords[index] = !updatedVisiblePasswords[index];
    setVisiblePasswords(updatedVisiblePasswords);
  };

  const deletePassword = async (index) => {
    try {
      let userid = typeof user === 'string' ? JSON.parse(user) : user.user;
        const url = `/deletePassword?user=${userid._id}`;
      const res = await axiosInstance.delete(url, {
        data: { index },
      });
      console.log(res);
      const updatedPasswords = [...allPassword];
      updatedPasswords.splice(index, 1);
      setallPassword(updatedPasswords);

      const updatedVisiblePasswords = [...visiblePasswords];
      updatedVisiblePasswords.splice(index, 1);
      setVisiblePasswords(updatedVisiblePasswords);
    } catch (error) {
      console.error("Error deleting password:", error);
    }
  };

  return (
    <div
      className="bg-white w-2/5 rounded-3xl shadow"
      style={{ height: "75vh" }}
    >
      <div className="flex justify-center mt-8 font-bold text-sky-700 text-xl">
        Created passwords
      </div>
      {/* <Lottie options={defaultOptions} /> */}
      <div className="max-h-96 px-12 py-4 mt-4 text-sky-800 overflow-y-auto">
        {allPassword.map((ps, index) => (
          <div
            key={index}
            className="group my-2 transition duration-300 ease-in-out transform shadow-lg hover:bg-sky-300 px-4 py-2 rounded-xl cursor-pointer"
          >
            <div className="flex justify-between items-center">
              {index + 1}
              <p className="text-xl">
                {visiblePasswords[index] ? ps : "********"}
              </p>
              <div className="flex items-center space-x-2 group-hover:opacity-100 transition-opacity">
                <FaEye
                  className="w-5 h-5 text-sky-500 hover:text-sky-700 mx-2 cursor-pointer"
                  onClick={() => togglePasswordVisibility(index)}
                />
                <RiDeleteBin5Fill
                  className="w-5 h-5 text-sky-500 hover:text-sky-700"
                  onClick={() => deletePassword(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowPassword;
