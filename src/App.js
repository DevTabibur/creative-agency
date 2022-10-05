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
import ManageServices from "./Pages/Dashboard/ManageServices";
import ClientReview from "./Pages/Dashboard/ClientReview";
import RequireAdmin from "./Authentication/RequireAdmin";
import RequireUser from "./Authentication/RequireUser";
import MyOrder from "./Pages/Dashboard/MyOrder";
import PaymentHistory from "./Pages/Dashboard/PaymentHistory";

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>

          <Route element={<RequireUser />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {/* nested route */}
              {/* by default Order component will render */}
              <Route index element={<Order />} />
              <Route path="review" element={<Review />} />
              <Route path="service-list" element={<ServiceList />} />
              <Route path="checkout" element={<MyOrder />} />
              <Route path="payment-history" element={<PaymentHistory />} />
            </Route>
          </Route>

          {/* admin route */}
          <Route element={<RequireAdmin />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {/* for admin */}
              <Route path="add-services" element={<AddServices />} />
              {/* by default Users component will render */}
              <Route index element={<Users />} />
              <Route path="payment" element={<PaymentDetails />} />
              <Route path="manage-services" element={<ManageServices />} />
              <Route path="client-review" element={<ClientReview />} />
            </Route>
          </Route>
        </Routes>
      </Header>
    </>
  );
}

export default App;
