import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardDoubleArrowUpTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowUpTwoTone';
import KeyboardDoubleArrowDownTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowDownTwoTone';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text="80%" strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">₹420</p>
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardDoubleArrowUpTwoToneIcon fontSize="small"/>
              <div className="resultAmount">₹10.5k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardDoubleArrowDownTwoToneIcon fontSize="small"/>
              <div className="resultAmount">₹10.5k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardDoubleArrowUpTwoToneIcon fontSize="small"/>
              <div className="resultAmount">₹10.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
