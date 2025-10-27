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
    const namesPerPage = 3

    const filtered = sampleUsers.filter((user) => (
        user?.name?.toLowerCase().includes(search.toLowerCase())
    ))
    const paginated = filtered.slice((page - 1) * namesPerPage, page * namesPerPage)

    return (
        <div>
            <input type="text" value={search} placeholder="Search... " onChange={(e) => setSearch(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {paginated.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
                <button onClick={() => setPage(page + 1)} disabled={page * namesPerPage >= filtered.length}>Next</button>
            </div>
        </div>
    )
}
export default Table;


