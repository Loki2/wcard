import React from "react";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Axios from "axios";
import { Row, Col } from "reactstrap";
// import { Table } from "reactstrap";
// import axios from "axios";

class User extends React.Component {
  constructor(props){
     super(props);
     this.state = {
       clients:[]
     }
  }

  componentDidMount(){
    Axios.get('/clients')
       .then(res => {
         console.log(res);
         this.setState({ clients: res.data })
       })
  }
  render(){
    const columns = [
      {
        Header: "ອາຍຸທຽບກັບຄູ່ບາວສາວ",
        accessor: "age",
        sortable: false,
        filterable: false
      },
      {
        Header: "ປະເພດສະຖານທີ",
        accessor: "typeplace",
        width: 200,
        maxWith: 200,
        minWith: 200
      },
      {
        Header: "ຊື່ສະຖານທີ",
        accessor: "place",
        sortable: false,
        filterable: false
      },
      {
        Header: "ສະຖານະຄວາມສຳພັນ",
        accessor: "relation",
        sortable: false,
        filterable: false
      },
      {
        Header: "ຄ່າໃສ່ຊ່ອງ kip",
        accessor: "amounted",
        sortable: false,
        filterable: false
      },
      {
        Header: "Actions",
        Cell: props =>{
          return(
            <div>
            <button style={{backgroundColor:"red", color:"#fefefe"}}
            onClick={() => {
             this.deleteRow(props.original.id)
            }}
            >ລຶບ</button>
            <button style={{backgroundColor:"grey", color:"#fefefe"}}
            onClick={() => {
             this.updateRow(props.original.id)
            }}
            >ແກ່ໄຂ</button>
            </div>
          )
        },
        sortable: false,
        filterable: false,
        width: 100,
        maxWith: 100,
        minWith: 100
      }
    ]
    return(
      <>
      <div className="content">
      <Row>
        <Col md="12">
        <ReactTable
        columns={columns}
        data = {this.state.clients}
        filterable
        defaultPageSize = {15}
        noDataText = {"ກະລຸນາລໍຖ້າ.....!"}
        >

        </ReactTable>

        </Col>
      </Row>
      </div>
      </>
    )
  }
}


export default User;

