import { useState } from "react";
import Routers from "./Routes";
import Header from "./components/header";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div
      className="h-full min-h-screen "
         style={{
        background:
          "linear-gradient(90deg,rgba(255,255,255,1) 0%, rgba(72,196,237,1) 67%)",
      }}
    >
      <Header />
      <Routers />
      <ToastContainer />
    </div>
  );
}

export default App;
