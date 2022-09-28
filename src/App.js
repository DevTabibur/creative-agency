import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Header from "./Shared/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Order from "./Pages/Dashboard/Order";
import Review from "./Pages/Dashboard/Review";
import ServiceList from "./Pages/Dashboard/ServiceList";
import AddServices from "./Pages/Dashboard/AddServices";
import Users from "./Pages/Dashboard/Users";
import PaymentDetails from "./Pages/Dashboard/PaymentDetails";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Header>

        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>

          <Route path="/dashboard" element={<Dashboard/>}>
            {/* nested route */}
            <Route path="order" element={<Order/>}/>
            <Route path="review" element={<Review/>}/>
            <Route path="service-list" element={<ServiceList/>}/>
            {/* for admin */}
            <Route path="add-services" element={<AddServices/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="payment" element={<PaymentDetails/>}/>

          </Route>
        </Routes>


      </Header>
    </>
  );
}

export default App;
