import React from "react";
import { Table } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
// import axios from "axios";


class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>ປະເພດອາຫານໃນງານ</th>
                <th>ຈຳນວນ %</th>
                <td>Edit</td>
                <td>Del</td>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>


          <Pagination aria-label="Page navigation example">
          <PaginationItem>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#" />
            </PaginationItem>
          </Pagination>
        </div>
      </>
    );
  }
}

export default Tables;
