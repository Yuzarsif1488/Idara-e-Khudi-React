import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SponsorDatatable from "../../components/sponsordatatable/SponsorDatatable";
import "./sponsors.scss";

const sponsers = () => {
  return (
    <div className="sponsors">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SponsorDatatable />
      </div>
    </div>
  );
};

export default sponsers;
