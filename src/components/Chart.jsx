
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { name: "Jan", users: 400 },
    { name: "Feb", users: 300 },
    { name: "Mar", users: 200 },
    { name: "Apr", users: 500 },
    { name: "May", users: 700 },
    { name: "Jun", users: 400 },
    { name: "Jul", users: 800 },
];

function Chart() {
    return (
        <div className="text-white px-20 w-screen h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart data={data}>
                    <Line type="monotone" dataKey="users" stroke="red" strokeWidth={2} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="black" strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
