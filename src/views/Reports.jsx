import React from "react";
import { Pie } from "react-chartjs-2";
import Axios from "axios";

// import Chart from './reports/Charts'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

const PieGraphPlace = props => {
  const data = {
    labels: ["ໂຮງແຮມ", "ເຮືອນ/ເດີນບານ/ເດີນໂຮງຮຽນ", "ພັດຕະຄານ"],
    datasets: [
      {
        data: [549, 974, 785],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  return <Pie data={data} />;
};

const PieGraphAge = props => {
  const data = {
    labels: [
      "ອາຍຸເທົ່າກັບ ຄູ່ເຈົ້າບ່າວເຈົ້າສາວ",
      "ອາຍຸນ້ອຍກວ່າ ຄູ່ເຈົ້າບ່າວເຈົ້າສາວ",
      "ອາຍຸຫຼາຍກວ່າ ຄູ່ເຈົ້າບ່າວເຈົ້າສາວ"
    ],
    datasets: [
      {
        data: [832, 351, 929],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  return <Pie data={data} />;
};

const PieGraphFoods = props => {
  const data = {
    labels: ["ບຸບເຟ້", "ໂຕະຈີນ"],
    datasets: [
      {
        data: [891, 936],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
      }
    ]
  };
  return <Pie data={data} />;
};

const PieGraphRelation = props => {
  const data = {
    labels: [
      "ຄົນຮູ້ຈັກ",
      "ແຟນເກົ່າ",
      "ເພື່ອນບ້ານ/ໝູ່ບໍ່ສະໜິດ",
      "ໝູ່ສະໜິດ",
      "ພີ່ນ້ອງ",
      "ຄູ/ອາຈານ",
      "ໝູ່/ເພື່ອນຮ່ວມງານ",
      "ເຈົ້ານາຍ/ລູກນ້ອງ/ລູກຄ້າ"
    ],
    datasets: [
      {
        data: [527, 152, 120, 241, 279, 160, 102, 255],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#b1b837",
          "#37a3b8",
          "#ad37b8",
          "#a4e019",
          "#e0a819",
          "#19e019"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#b1b837",
          "#37a3b8",
          "#ad37b8",
          "#a4e019",
          "#e0a819",
          "#19e019"
        ]
      }
    ]
  };
  return <Pie data={data} />;
};

const PieGraphSalary = props => {
  const data = {
    labels: [
      "0 ຫາ 3 ລ້ານກີບ",
      "3 ຫາ 5 ລ້ານກີບ",
      "5 ຫາ 8 ລ້ານກີບ",
      "8 ລ້ານຂຶ້ນໄປ"
    ],
    datasets: [
      {
        data: [798, 254, 426, 146],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#e08a19"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#e08a19"]
      }
    ]
  };
  return <Pie data={data} />;
};

class Typography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    Axios.get("/clients").then(res => {
      console.log(res);
      this.setState({ clients: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">ອາຍຸທຽບກັບຄູ່ບາວສາວ</CardTitle>
                </CardHeader>
                <CardBody>
                  <PieGraphAge />
                </CardBody>
                <CardFooter>
                  <div className="legend"></div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">ປະເພດອາຫານ</CardTitle>
                </CardHeader>
                <CardBody>
                  <PieGraphFoods />
                </CardBody>
                <CardFooter>
                  <div className="legend"></div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">ສະຖານທີ</CardTitle>
                </CardHeader>

                <PieGraphPlace />
                <CardFooter>
                  <div className="legend"></div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">ຄວາມສຳພັນ</CardTitle>
                </CardHeader>
                <CardBody>
                  <PieGraphRelation />
                </CardBody>
                <CardFooter>
                  <div className="legend"></div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">ເງິນເດືອນສະເລ່ຍ</CardTitle>
                </CardHeader>
                <CardBody>
                  <PieGraphSalary />
                </CardBody>
                <CardFooter>
                  <div className="legend"></div>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Typography;
