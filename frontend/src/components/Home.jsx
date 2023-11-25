import React, { useEffect } from "react";
import { useAuth } from "../userContext";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  let { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="bg-white">
      <div className=" flex justify-evenly m-4">
        <div
          className="bg-sky-100 w-2/5 rounded-lg shadow flex justify-center items-center flex-col px-8"
          style={{ height: "75vh" }}
        >
          <div className="flex justify-center mt-4 font-bold text-sky-700 text-xl">
            Generate a password
          </div>
          <input
            type="text"
            className="border-4 mt-4 font-bold text-sky-700 text-xl rounded-lg border-sky-200"
          />
          <div className="flex flex-col justify-center w-3/5 text-sky-700 ">
            <div className="m-4 ">
              <span className="mx-4">Lenght</span>
              <input type="number" className="w-24" />
            </div>
            <div className="flex mt-2">
              <div className="checkbox-wrapper  flex ">
                <input id="_checkbox-26" type="checkbox" />
                <label htmlFor="_checkbox-26">
                  <div className="tick_mark"></div>
                </label>
              </div>{" "}
              <div className="mx-4">Capital Letters</div>
            </div>
            <div className="flex mt-6">
              <div className="checkbox-wrapper  flex ">
                <input id="_checkbox-26" type="checkbox" />
                <label htmlFor="_checkbox-26">
                  <div className="tick_mark"></div>
                </label>
              </div>{" "}
              <div className="mx-4">Lower Letters</div>
            </div>
            <div className="flex mt-6">
              <div className="checkbox-wrapper  flex ">
                <input id="_checkbox-26" type="checkbox" />
                <label htmlFor="_checkbox-26">
                  <div className="tick_mark"></div>
                </label>
              </div>{" "}
              <div className="mx-4">Numbers</div>
            </div>
            <div className="flex mt-6">
              <div className="checkbox-wrapper  flex ">
                <input id="_checkbox-26" type="checkbox" />
                <label htmlFor="_checkbox-26">
                  <div className="tick_mark"></div>
                </label>
              </div>{" "}
              <div className="mx-4">Special Characters</div>
            </div>
            <button
              title="Save"
              class="flex justify-center my-4 cursor-pointer flex items-center fill-sky-400 bg-sky-950 hover:bg-sky-900 active:border active:border-sky-400 rounded-md duration-100 p-2"
            >
              <span class="text-sm text-sky-400 font-bold pr-1">
                Save Post
              </span>
            </button>
          </div>
        </div>
        <div
          className="bg-sky-100 w-2/5 rounded-lg shadow"
          style={{ height: "75vh" }}
        >
          <div className=" flex justify-center mt-8 font-bold text-sky-700 text-xl">
            Created passwords
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
