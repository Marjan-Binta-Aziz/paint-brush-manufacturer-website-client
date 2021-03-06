import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import Navbar from "./Pages/Homepage/Navbar";
import SignIn from "./Pages/User/SignIn";
import SignUp from "./Pages/User/SignUp";
import Purchase from "./Pages/Purchases/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddReview from "./Pages/Dashboard/AddReview";
import AddaNewTool from "./Pages/Dashboard/AddaNewTool";
import ManageTool from "./Pages/Dashboard/ManageTool";
import AllUser from "./Pages/Dashboard/AllUser";
import MyOrder from "./Pages/Dashboard/MyOrder";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import Payment from "./Pages/Dashboard/Payment";
import RequireAuth from "./Pages/Shared/RequireAuth";
import RequireAdmin from "./Pages/Shared/RequireAdmin";
import AllTools from "./Pages/Tools/AllTools";
import AllReview from "./Pages/Homepage/AllReview";
import Footer from "./Pages/Shared/Footer";
import Blogs from "./Pages/Homepage/Blogs";
import Protfolio from "./Pages/Shared/Protfolio";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/allTools" element={<AllTools></AllTools>}></Route>
        <Route path="/all-review" element={<AllReview></AllReview>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/protfolio" element={<Protfolio></Protfolio>}></Route>
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        {/* ======Dashboard====== */}
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route
            path="updateProfile"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
          <Route
            path="manageOrder"
            element={<ManageOrder></ManageOrder>}
          ></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route
            path="allUser"
            element={
              <RequireAdmin>
                <AllUser></AllUser>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageTool"
            element={
              <RequireAdmin>
                <ManageTool></ManageTool>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addTool"
            element={
              <RequireAdmin>
                <AddaNewTool></AddaNewTool>
              </RequireAdmin>
            }
          ></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
