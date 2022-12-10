import Table from "react-bootstrap/Table";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
function TextField1() {
  return (
    <div>
       <Card>
        <Card.Title className="ps-5 pt-5">
          Attendance List
        </Card.Title>
      <Card.Body>
      <Table  striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Date</th>
          <th>Clock In/Out</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>12/8/2022</td>
          <td>8:35 AM Time In</td>
          <td><Badge bg="success">Punctual</Badge></td>
        </tr>
        <tr>
        <td>2</td>
          <td>12/7/2022</td>
          <td>6:10 PM Time Out</td>
          <td><Badge bg="success">End Class</Badge></td>
        </tr>
        <tr>
        <td>3</td>
          <td>12/7/2022</td>
          <td>1:35 PM Time In</td>
          <td><Badge bg="danger">Late</Badge></td>
        </tr>
        <tr>
          <td>4</td>
          <td>12/7/2022</td>
          <td>8:50 AM Time In</td>
          <td><Badge bg="success">Punctual</Badge></td>
        </tr>
        <tr>
        <td>5</td>
          <td>12/6/2022</td>
          <td>6:00 PM Time Out</td>
          <td><Badge bg="success">End Class</Badge></td>
        </tr>
        <tr>
        <td>6</td>
          <td>12/6/2022</td>
          <td>12:50 PM Time In</td>
          <td><Badge bg="success">Late</Badge></td>
        </tr>
        <tr>
          <td>6</td>
          <td>12/6/2022</td>
          <td>8:12 AM Time In</td>
          <td><Badge bg="success">Punctual</Badge></td>
        </tr>
        <tr>
        <td>7</td>
          <td>12/5/2022</td>
          <td>6:30 PM Time Out</td>
          <td><Badge bg="success">End Class</Badge></td>
        </tr>
        <tr>
        <td>8</td>
          <td>12/5/2022</td>
          <td>12:15 PM Time In</td>
          <td><Badge bg="success">Late</Badge></td>
        </tr>
        <tr>
        <td>9</td>
          <td>12/4/2022</td>
          <td>6:10 PM Time Out</td>
          <td><Badge bg="success">End Class</Badge></td>
        </tr>
        <tr>
        <td>10</td>
          <td>12/4/2022</td>
          <td>12:25 PM Time In</td>
          <td><Badge bg="success">Late</Badge></td>
        </tr>
      </tbody>
    </Table>
        </Card.Body>

    </Card>
    
    </div>
   
  );
}
export default TextField1;