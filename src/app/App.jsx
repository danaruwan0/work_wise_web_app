import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import "./App.css";
import MiniDrawer from "../component/drower/MiniDrawer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={<MiniDrawer />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
