import React from "react";
import Axios from "axios";
import ReactTable from 'react-table';
import "react-table/react-table.css";


class Places extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      places:[]
    }
  }
  componentDidMount(){
    Axios.get('/places').then( res => {
      this.setState({ places: res.data })
    })
  }
  render() {
    const columns = [
      {
        Header: 'ລະຫັດ',
        accessor:'placeId',
        style: {
          textAlign:"right" 
        },
        width: 80,
        maxWith: 80,
        minWith: 80
      },
      {
        Header: 'ປະເພດສະຖານທີ',
        accessor:'title',
        sortable: false,
        filterable: false
      },
      {
        Header: 'ອັດຕ່າທີກຳນົດ',
        accessor:'baseCount',
        sortable: false,
        filterable: false
      },
      {
        Header: 'ຄິດເປັນ %',
        accessor:'mounted',
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
            data = {this.state.places}
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

export default Places;
