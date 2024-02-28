import { useState } from "react";
import DataGridContainer from "../../components/datagridcontainer/DataGridContainer";
import AddModal from "../../components/addmodal/AddModal";
import "./products.scss"
import { useQuery } from "@tanstack/react-query";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 150,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 200,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 150,
        type: "boolean",
    },
];

const product_api_uri = "http://localhost:5001/api/products";

function Products() {
    const [open, setOpen] = useState(false);

    const { isLoading, data } = useQuery({
        queryKey: ["allusers"],
        queryFn: () =>
          fetch(product_api_uri).then(
            (res) => res.json(),
          ),
      });

    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                {/* <button onClick={() => setOpen(true)}>Add product</button> */}
            </div>
            {isLoading ? (
                "Loading..."
            ) : (
                <DataGridContainer urlSlug="products" columns={columns} rows={data} />
            )}
            {open && <AddModal urlSlug="product" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Products
