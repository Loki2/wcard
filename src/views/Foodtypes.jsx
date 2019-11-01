import React from "react";
import Axios from "axios";
import ReactTable from 'react-table';
import "react-table/react-table.css";


class Tables extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foods:[]
    }
  }
  componentDidMount(){
    Axios.get('/foods').then( res => {
      this.setState({ foods: res.data })
    })
  }
  render() {
    const columns = [
      {
        Header:'ລະຫັດ',
        accessor: 'foodtypeId',
        style: {
          textAlign:"right" 
        },
        width: 80,
        maxWith: 80,
        minWith: 80
      },
      {
        Header:'ປະເພດອາຫານ',
        accessor: 'title',
        sortable: false,
        filterable: false
      },
      {
        Header:'ຄິດເປັນ %',
        accessor: 'count',
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
    return (
      <>
        <div className="content">
            <ReactTable
            columns = {columns}
            data = {this.state.foods}
            filterable
            defaultPageSize = {15}
            noDataText = {"ກະລຸນາລໍຖ້າ.....!"}
            >


            </ReactTable>
        </div>
      </>
    );
  }
}

export default Tables;
