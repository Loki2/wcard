import React from "react";
import Axios from "axios";
import ReactTable from 'react-table';
import "react-table/react-table.css";


class Notifications extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      relations:[]
    }
  }
  componentDidMount(){
    Axios.get('/relations').then( res => {
      this.setState({ relations: res.data })
    })
  }
  render() {
    const columns = [
      {
        
      }
    ]
    return (
      <>
        <div className="content">
        <ReactTable
            columns = {columns}
            >


            </ReactTable>
        </div>
      </>
    );
  }
}

export default Notifications;
