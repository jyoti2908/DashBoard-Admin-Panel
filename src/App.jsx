import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Admin from "./pages/Admin"
import Login from "./components/Login";
import Home from "./components/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {user ? (
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/analytics' element={<Analytics />} />
                    <Route path='/admin' element={<Admin />} />
                </Routes>
            ) : (
                <Login />
            )}
        </div>
    )
}
export default App;




