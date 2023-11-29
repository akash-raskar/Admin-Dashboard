import "./widget.scss";
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import NextWeekTwoToneIcon from '@mui/icons-material/NextWeekTwoTone';
//import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
//import BalanceTwoToneIcon from '@mui/icons-material/BalanceTwoTone';
import UpcomingTwoToneIcon from '@mui/icons-material/UpcomingTwoTone';
//import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import KeyboardDoubleArrowUpTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowUpTwoTone';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "customer":
            data={
              title:"Total Cutometers",
              isMoney: false,
              link:"View All Customers",
              icon: <PermIdentityTwoToneIcon className="icon" style={{color:"crimson", backgroundColor: "rgba(255,0,0,0.2)"}}/>
            }
            break;
    case "weekly":
            data = {
              title:"Weekly Sales",
              isMoney: true,
              link:"View Weekly Sales",
              icon: <NextWeekTwoToneIcon className="icon" style={{color:"goldenrod", backgroundColor: "rgba(218,165,32,0.2)"}}/>
            };
            break;
    case "monthly":
            data = {
              title:"Monthly Sales",
              isMoney: true,
              link:"View Monthly Sales",
              icon: <CalendarMonthTwoToneIcon className="icon" style={{color:"green", backgroundColor: "rgba(0,128,0,0.2)"}}/>
            };
            break;
    case "yearly":
            data = {
              title:"Yearly Sales",
              isMoney: true,
              link:"View Yearly Sales",
              icon: <UpcomingTwoToneIcon className="icon" style={{color:"purple", backgroundColor: "rgba(128,0,128,0.2)"}}/>
            };
            break;
    default:
            break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "₹"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardDoubleArrowUpTwoToneIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
