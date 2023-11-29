import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  
  const rows = [
    {
      id: 1213232,
      product: 'ASUS Laptop',
      img: 'https://th.bing.com/th/id/OIP.K4aQyYIUSTtD_UCu2_UQngHaEr?pid=ImgDet&rs=1',
      name: 'Akash',
      date: '1 August',
      amount: 27000,
      payment: 'Cash on Delivery',
      status: 'Approved'
    },

    {
      id: 12133432,
      product: 'ASUS Laptop 14',
      img: 'https://th.bing.com/th/id/R.bcc3f14095fc2fec682866aa0c3b4bcc?rik=Dk3u5hhH6rXkzw&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fasus_k55a_ds71_15_6_notebook_computer_924687.jpg&ehk=aJRcEpC15VnWBCX17Lf8dshobI5Chm3ROr%2bXCPj7mV0%3d&risl=&pid=ImgRaw&r=0',
      name: 'Shiv',
      date: '1 August',
      amount: 32000,
      payment: 'Online',
      status: 'Pending'
    }
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.payment}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
