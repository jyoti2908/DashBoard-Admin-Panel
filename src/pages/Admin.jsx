import React from "react"
import Table from "../components/Table";

function Admin() {
    return (
        <div  className="bg-cover bg-repeat w-screen h-screen"
            style={{ backgroundImage: "url('analytic.jpg')" }}>
            <h1 className="pt-12 mx-auto flex items-center justify-center mb-12 font-sans text-2xl font-semibold">🧑‍💼 ADMIN</h1>
            <Table />
        </div>
    )
}
export default Admin;



