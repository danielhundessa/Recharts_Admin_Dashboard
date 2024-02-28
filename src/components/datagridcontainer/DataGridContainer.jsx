import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Link } from "react-router-dom"
import "./datagridcontainer.scss"
import PropTypes from "prop-types"
import { useQueryClient, useMutation } from "@tanstack/react-query"

const api_uri = "http://localhost:5001/api";

function DataGridContainer(props) {
  DataGridContainer.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    rows: PropTypes.arrayOf(PropTypes.object),
    urlSlug: PropTypes.string,
  }

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return fetch(`${api_uri}/${props.urlSlug}/${id}`, {
        method: "delete",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.urlSlug}`]);
    }
  })

  function handleDelete(id) {
    mutation.mutate(id)
  }

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.urlSlug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="data-grid-container">
      <DataGrid
        className="data-grid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 150 }
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataGridContainer
