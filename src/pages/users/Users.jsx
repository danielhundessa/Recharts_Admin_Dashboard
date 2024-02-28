import AddModal from "../../components/addmodal/AddModal"
import DataGridContainer from "../../components/datagridcontainer/DataGridContainer"
import { useState } from "react"
import "./users.scss"
import { useQuery } from "@tanstack/react-query"

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 150,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 150,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 150,
        type: "boolean",
    },
];

const user_api_uri = "http://localhost:5001/api/users";

function Users() {
    const [open, setOpen] = useState(false);

    const { isLoading, data } = useQuery({
        queryKey: ["allusers"],
        queryFn: () =>
          fetch(user_api_uri).then(
            (res) => res.json(),
          ),
      });

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                {/* <button onClick={() => setOpen(true)}>Add user</button> */}
            </div>
            {isLoading ? (
                "Loading..."
            ) : (
                <DataGridContainer 
                    urlSlug="users" 
                    columns={columns} 
                    rows={data}
                    sx={{ width: 2000 }}
                />
            )}
            {open && <AddModal urlSlug="user" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users
