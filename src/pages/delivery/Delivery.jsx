import "./delivery.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Delivery = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img className="itemImg" src="https://iandsmith.files.wordpress.com/2018/04/pexels-photo-941693.jpeg" alt=""/>
              <div className="details">
                <h1 className="itemTitle">Akash Raskar</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">akshraskar@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91-1234567890</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234 Road Yd. Noida</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City/Town:</span>
                  <span className="itemValue">Surat</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">  
            <Chart aspect={3 / 1} title="User Transactions ( Last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
