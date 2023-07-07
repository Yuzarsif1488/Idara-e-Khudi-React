import "./Branches.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import BranchesDatatable from "../../components/branchesdatatable/BranchesDatatable";

const Branches = () => {
  return (
    <div className="branches">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <BranchesDatatable />
      </div>
    </div>
  );
};

export default Branches;
