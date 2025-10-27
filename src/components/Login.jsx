import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        login(username, password);
    }

    return (
        <div className="bg-blue-300 ">
            <div className="flex flex-col items-center justify-center mx-auto w-screen min-h-screen ">
                <h2 className="mx-auto text-blue-900 text-2xl font-semibold mb-4 border-b border-gray-700 hover:text-blue-600">LOGIN PAGE</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        className="h-8 text-center rounded text-sm md:w-72 placeholder:hover:text-black"
                        type="text"
                        value={username}
                        placeholder="Enter your username.."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                    className="h-8 text-center rounded text-sm placeholder:hover:text-black"
                        type="password"
                        value={password}
                        placeholder="Enter your password.."
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button className="bg-blue-500 text-white text-sm border-white hover:bg-blue-800 w-32 mx-auto" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>

    );
}

export default Login;
