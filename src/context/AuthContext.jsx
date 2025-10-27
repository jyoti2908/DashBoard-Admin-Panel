import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    function login(username, password) {
        if (username === "admin" && password === "1234") {
            setUser({ username });
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    }

    function logout() {
        setUser('')
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProvider }