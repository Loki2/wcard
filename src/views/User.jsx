import React, {useState, useEffect} from "react";
import { Table } from "reactstrap";
import axios from "axios";






// class User extends React.Component {
//   state = {
//     clients: []
//   }
//   componentDidMount() {
//     axios.get('/clients').then((response) => {
//       this.setState({
//         clients: response.data
//       })
//     })
//   }
//   render() {
//     let clients = this.state.map((client) => {
//       return(
//         <tr key={client.id}>
//         <th scope="row">1</th>
//         <td>{client.id}</td>
//         <td>{client.age_diff}</td>
//         <td>{client.food_types}</td>
//         <td>{client.org_place}</td>
//         <td>{client.relation}</td>
//         <td>{client.saisong_recommend}</td>
//         <td>{client.post_date}</td>
//         <td>
//           <a>Edit</a>
//           <a>Del</a>
//         </td>
//       </tr>
//       )
//     })
//     return (
//       <>
//         <div className="content">
//         <Table responsive>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>ຊື່ສະຖ່ານທີ</th>
//                 <th>ຈຳນວນ %</th>
//                 <th>ອັດຕາກາບປຽບທຽບ</th>
//                 <th>Options</th>
//               </tr>
//             </thead>
//             <tbody>
//               {clients}
//             </tbody>
//           </Table>


          
//         </div>
//       </>
//     );
//   }
// }

const User = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [clientsPerPage, setClientsPerPage] = useState(10);

  useEffect(() => {
    const fetchClients = async() => {
      setLoading(true);
      const res = await axios.get('/clients');
      setClients(res.data);
      setLoading(false);
    }
    fetchClients();
  }, []);

 // Get the last Index Clients
  const indexOflastCleients = currentpage * clientsPerPage;
  const indexOffirstClients = indexOflastCleients - clientsPerPage;
  const currentClients = clients.slice(indexOffirstClients, indexOflastCleients);


 //console.log(clients);
  return(
    <>
    <div className="content">
     <Table responsive>
            <thead>
                <th>#</th>
                <th>ປະເພດອາຫານ</th>
                <th>ຈຳນວນ %</th>
                <th>Option</th>
            </thead>
            {clients.map(clients =>(
              <tbody>
              <tr key={clients.id}>
                <th scope="row">1</th>
                <td>{clients.id}</td>
                <td>{clients.sal}</td>
                <td>{clients.saisong_recommend}</td>
              </tr>
            </tbody>
            ))}
          </Table>   
    </div>
    </>
  )
}

export default User;

