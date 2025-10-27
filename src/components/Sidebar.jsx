import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {
    const { logout } = useContext(AuthContext)

    return (
        <div className="h-screen bg-[#1C1C1C] text-white flex flex-col gap-8 ">
            <h2 className="mx-auto text-2xl font-semibold rounded-bb-sm mt-8">ADMIN PANEL</h2>
            <nav className="flex flex-col items-start justify-center mx-auto">
                <Link to="/dashboard"> 🏠 DASHBOARD </Link>
                <Link to='/analytics'> 📊 ANALYTICS </Link>
                <Link to='/admin'> 🧑‍💼 ADMIN PAGE </Link>
            </nav>
            <button onClick={logout}
                className="w-32 h-12 bg-blue-600 border-none text-sm rounded-full mx-auto">LOGOUT
            </button>
        </div>
    )
}
export default Sidebar;










// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";

// export default function Sidebar({ children }) {
//   const { logout } = useContext(AuthContext);

//   return (
//     <div className="layout">
//       <aside className="sidebar">
//         <h3>Admin Panel</h3>
//         <nav>
//           <Link to="/dashboard">🏠 Dashboard</Link>
//           <Link to="/analytics">📊 Analytics</Link>
//           <Link to="/admin">🧑‍💼 Admin</Link>
//           <button onClick={logout}>Logout</button>
//         </nav>
//       </aside>
//       <main className="main">{children}</main>
//     </div>
//   );
// }