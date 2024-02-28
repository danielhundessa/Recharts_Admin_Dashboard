import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./addmodal.scss"
import PropTypes from "prop-types"

const api_uri = "http://localhost:5001/api";

function AddModal(props) {
    AddModal.propTypes = {
        columns: PropTypes.arrayOf(PropTypes.object),
        urlSlug: PropTypes.string,
        setOpen: PropTypes.func,
    }

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => {
            return fetch(`${api_uri}/${props.urlSlug}s`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: 111,
                    img: "",
                    lastName: "Hello",
                    firstName: "Test",
                    email: "testme@gmail.com",
                    phone: "123 456 789",
                    createdAt: "01.02.2023",
                    verified: true,
                }),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries([`all${props.urlSlug}s`]);
        },
    });

    function handleSubmit(e) {
        e.preventDefault();

        mutation.mutate();
        props.setOpen(false);
    }

    return (
        <div className="add-modal">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>X</span>
                <h1>Add {props.urlSlug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns
                        .filter(item => item.field !== "id" && item.field !== "id")
                        .map((column) => (
                            <div className="item">
                                <label>{column.headerName}</label>
                                <input type={column.type} placeholder={column.field} />
                            </div>
                        ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default AddModal
