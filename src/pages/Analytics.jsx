import React from "react"
import Chart from "../components/Chart";

function Analytics() {
    return (
        <div className="bg-cover bg-repeat w-full h-screen"
            style={{ backgroundImage: "url('analytic.jpg')" }}>
            <h1 className="pt-12 mx-auto flex items-center justify-center mb-12 font-sans text-2xl font-semibold">📊 ANALYTICS</h1>
            <Chart />
        </div>
    )
}
export default Analytics;


