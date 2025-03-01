import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import MiniDrawer from "../component/drower/MiniDrawer";
import Nav from "../component/nav/Nav";
import Home from "../pages/Home/Home";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={<MiniDrawer />}/>
        <Route path="/nav" element={<Nav/>}/>
        
        

      </Routes>
    </BrowserRouter>
    // <Home/>
  );
}

export default App;
