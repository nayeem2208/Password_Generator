import { useState } from "react";
import Routers from "./Routes";
import Header from "./components/header";

function App() {
  return (
    <div
      className="h-full min-h-screen "
      // style={{
      //   backgroundImage:
      //     'url("https://media.giphy.com/media/7AtHoQ9XWbpwLRxs0t/giphy.gif")',
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Header />
      <Routers />
    </div>
  );
}

export default App;
