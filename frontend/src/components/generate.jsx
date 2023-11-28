import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import usePasswordGenerator from "../passwordGenerator";
import { toast } from "react-toastify";
import { MdOutlineDone, MdClear } from "react-icons/md";
import axiosInstance from "../axios";
import { useAuth } from "../userContext";

function Generate() {
  const [copy, setCopy] = useState(false);
  const [len, setLength] = useState(4);
  const [save, setSave] = useState(false);
  const [check, setCheckbox] = useState({
    cap: false,
    low: false,
    num: false,
    special: false,
  });
  const { user,allPassword,setallPassword,setRefresh } = useAuth();

  const { password, error, generatePassword, setPassword } =
    usePasswordGenerator();
 

  useEffect(() => {
    if (error) {
      toast.error(error);
    } else if (password !== "") {
      setSave(true);
    }
  }, [error, password]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  const savePassword = async () => {
    try {
      console.log(user,'user')
      let userid = typeof user === 'string' ? JSON.parse(user) : user.user;
      console.log(userid,'userid')
      const id = userid._id
      let res = await axiosInstance.put("/addPassword", { password,id });
      setRefresh(true)
      // setallPassword({ ...allPassword, newPassword: password });
      // console.log(allPassword,'pssssssssssssss')

      toast.success(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-white w-2/5 rounded-3xl shadow flex justify-center items-center flex-col px-8 "
      style={{ height: "75vh" }}
    >
      <div className="flex justify-center mt-4 font-bold text-sky-700 text-xl">
        Generate a password
      </div>
      <div className="bg-sky-700 w-4/5 mt-4 rounded-lg h-9 flex items-center justify-between px-2">
        <p className="  text-sky-200">{password}</p>
        {password && password !== "" && copy ? (
          <MdOutlineDone className="text-sky-200 cursor-pointer" />
        ) : (
          <FaCopy
            className="text-sky-200 cursor-pointer"
            onClick={handleCopy}
          />
        )}
      </div>
      <div className="flex flex-col justify-center w-3/5 text-sky-700 ">
        <div className="m-4 ">
          <span className="mx-4 text-sm">
            Character Length:{" "}
            <span className="mx-1 text-base font-bold">{len}</span>
          </span>
          <input
            type="range"
            className=" rounded-lg p-1 shadow text-sky-400"
            min="4"
            max="20"
            value={len}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="flex mt-2">
          <div className="checkbox-wrapper flex">
            <input
              id="_checkbox-1"
              type="checkbox"
              checked={check.cap}
              onChange={(e) => setCheckbox({ ...check, cap: e.target.checked })}
            />
            <label htmlFor="_checkbox-1">
              <div className="tick_mark"></div>
            </label>
          </div>{" "}
          <div className="mx-4">Capital Letters</div>
        </div>
        <div className="flex mt-6">
          <div className="checkbox-wrapper flex">
            <input
              id="_checkbox-2"
              type="checkbox"
              checked={check.low}
              onChange={(e) => setCheckbox({ ...check, low: e.target.checked })}
            />
            <label htmlFor="_checkbox-2">
              <div className="tick_mark"></div>
            </label>
          </div>{" "}
          <div className="mx-4">Lower Letters</div>
        </div>
        <div className="flex mt-6">
          <div className="checkbox-wrapper flex">
            <input
              id="_checkbox-3"
              type="checkbox"
              checked={check.num}
              onChange={(e) => setCheckbox({ ...check, num: e.target.checked })}
            />
            <label htmlFor="_checkbox-3">
              <div className="tick_mark"></div>
            </label>
          </div>{" "}
          <div className="mx-4">Numbers</div>
        </div>
        <div className="flex mt-6">
          <div className="checkbox-wrapper flex">
            <input
              id="_checkbox-4"
              type="checkbox"
              checked={check.special}
              onChange={(e) =>
                setCheckbox({ ...check, special: e.target.checked })
              }
            />
            <label htmlFor="_checkbox-4">
              <div className="tick_mark"></div>
            </label>
          </div>{" "}
          <div className="mx-4">Special Characters</div>
        </div>
      </div>
      <div className=" flex w-full justify-center">
        <button
          title="Save"
          onClick={() => generatePassword(check, len)}
          className="flex justify-center my-4 mx-2 w-2/6 cursor-pointer  fill-sky-400 bg-sky-900 hover:bg-sky-950 active:border active:border-sky-400 rounded-md duration-100 p-2"
        >
          <span className="text-sm text-sky-300 font-bold pr-1 ">Generate</span>
        </button>
        {save && (
          <button
            title="Save"
            onClick={savePassword}
            className="flex justify-center my-4 mx-2 w-2/6 cursor-pointer  fill-sky-400 bg-sky-900 hover:bg-sky-950 active:border active:border-sky-400 rounded-md duration-100 p-2"
          >
            <span className="text-sm text-sky-300 font-bold pr-1 ">Save</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Generate;
