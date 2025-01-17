import "./App.css";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      
      </Routes>
    </div>
  )
}

export default App;
