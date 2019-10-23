import Dashboard from "views/Dashboard.jsx";
import Relations from "views/Relations.jsx";
import Reports from "views/Reports.jsx";
import Foodtypes from "views/Foodtypes.jsx";
import Places from "views/Places.jsx";
import UserPage from "views/User.jsx";


var routes = [{
    path: "/dashboard",
    name: "ໜ້າຫລັກ",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/clients",
    name: "ຈັດການຂໍ້ມູນລູກຄ້າ",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/places",
    name: "ສະຖ່ານຈັດງານ",
    icon: "nc-icon nc-pin-3",
    component: Places,
    layout: "/admin"
  },
  {
    path: "/relations",
    name: "ປະເພດຄວາມສຳພັນ",
    icon: "nc-icon nc-bell-55",
    component: Relations,
    layout: "/admin"
  },
  {
    path: "/foodtypes",
    name: "ປະເພດອາຫານ",
    icon: "nc-icon nc-tile-56",
    component: Foodtypes,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "ລາຍງານຕ່າງໆ",
    icon: "nc-icon nc-caps-small",
    component: Reports,
    layout: "/admin"
  }
];
export default routes;