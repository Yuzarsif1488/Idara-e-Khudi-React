import "./BranchesDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { branchesColumn, branchesRow } from "../../datatablesource";

const BranchesDatatable = () => {
  return (
    <div className="branchesdatatable">
      <DataGrid
        rows={branchesRow}
        columns={branchesColumn}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default BranchesDatatable;
