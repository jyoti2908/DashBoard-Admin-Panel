import { useState } from "react";

const sampleUsers = [
    { name: "Alice", email: "alice@mail.com", role: "Admin" },
    { name: "Bob", email: "bob@mail.com", role: "Editor" },
    { name: "Charlie", email: "charlie@mail.com", role: "Viewer" },
    { name: "Diana", email: "diana@mail.com", role: "Editor" },
    { name: "Eve", email: "eve@mail.com", role: "Admin" },
    { name: "Raon", email: "roan@mail.com", role: "Viewer" },
    { name: "Jo", email: "jo@mail.com", role: "Admin" },
    { name: "Smile", email: "smile@mail.com", role: "Viewer" },
    { name: "Frank", email: "frank@mail.com", role: "Editor" },
];

function Table() {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const namesPerPage = 4

    const filtered = sampleUsers.filter((user) => (
        user?.name?.toLowerCase().includes(search.toLowerCase())
    ))
    const paginated = filtered.slice((page - 1) * namesPerPage, page * namesPerPage)

    return (
        <div className="px-32">
            <input type="text" value={search} placeholder="Search... " onChange={(e) => setSearch(e.target.value)}
                className="w-auto px-2 py-2 bg-green-400 border-[1px] border-green-800 rounded-full placeholder:text-white text-center"/>
            <table className="w-full mt-6 border-green-400 border-[1px]">
                <thead className="bg-green-400 text-white font-serif text-lg px-2">
                    <tr>
                        <th className="border border-green-600">Name</th>
                        <th className="border border-green-600">Email</th> 
                        <th className="border border-green-600">Role</th>
                    </tr>
                </thead>
                <tbody className="font-serif text-center bg-emerald-100">
                    {paginated.map((user, index) => (
                        <tr key={index}>
                            <td className="py-4 border border-green-400 hover:bg-green-300 hover:text-gray-500">{user.name}</td>
                            <td className="py-4 border border-green-400  hover:bg-green-300 hover:text-gray-500">{user.email}</td>
                            <td className="py-4 border border-green-400  hover:bg-green-300 hover:text-gray-500">{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex gap-4 mt-8 items-center justify-center">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}
                    className="bg-red-500 rounded px-2 py-2 w-20 text-white text-sm">Prev</button>
                <button onClick={() => setPage(page + 1)} disabled={page * namesPerPage >= filtered.length}
                    className="bg-red-500 rounded px-2 py-2 w-20 text-white text-sm">Next</button>
            </div>
        </div>
    )
}
export default Table;


