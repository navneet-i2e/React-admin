import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Datatable = (props) => {
  const handleDelete = (id) => {
    console.log(id + " deleted");
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`} className="edit">
            <img src="/view.svg" alt="view" />
          </Link>
          <div
            className="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <img src="delete.svg" alt="delete" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]} // Ensure proper merging here
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
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        
      />
    </div>
  );
};

Datatable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  slug: PropTypes.string,
};

export default Datatable;
