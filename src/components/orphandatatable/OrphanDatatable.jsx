import "./OrphanDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { row, orphancolumn } from "../../datatablesource";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 210,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View </div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={row}
        columns={orphancolumn.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
