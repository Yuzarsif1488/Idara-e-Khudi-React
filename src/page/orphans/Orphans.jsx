import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Orphans.scss";
import Datatable from "../../components/datatable/Datatable";

const Orphans = () => {
  return (
    <div className="orphans">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Orphans;
