import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import './App.css';
import MiniDrawer from "../component/drower/MiniDrawer";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
            <Route path="*" element={<Login/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <MiniDrawer/>
        </Routes>
    </BrowserRouter> */}

    <MiniDrawer/>
    </div>
    


    
  );
}

export default App;
