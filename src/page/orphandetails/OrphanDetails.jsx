import "./OrphanDetails.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import OrphanDatatable from "../../components/orphandatatable/OrphanDatatable";

const OrphanDetails = () => {
  return (
    <div className="orphandetails">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="/src/img/kid 1.jpg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Kashif Raees</h1>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">11 yrs</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Class:</span>
                  <span className="itemValue">7th</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Street 352, Mohallah Sayedan, Chak 58/2-b, Krorpakka
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
            Display chart here
          </div>
        </div>
        <div className="bottom">
          <OrphanDatatable />
        </div>
      </div>
    </div>
  );
};

export default OrphanDetails;
