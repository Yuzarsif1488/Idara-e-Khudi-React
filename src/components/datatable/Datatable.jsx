import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { row, column } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 210,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/orphandetails" style={{ textDecoration: "none" }}>
              <div className="viewButton">View </div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {/* <div className="datatableTitle">
        Add New Orphan
        <Link to="/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div> */}
      <DataGrid
        rows={row}
        columns={column.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
