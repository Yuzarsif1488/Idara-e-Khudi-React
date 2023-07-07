import "./SponsorDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { sponsorColumn, sponsorRow } from "../../datatablesource";

const SponsorDatatable = () => {
  return (
    <div className="sponsordatatable">
      <DataGrid
        rows={sponsorRow}
        columns={sponsorColumn}
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

export default SponsorDatatable;
