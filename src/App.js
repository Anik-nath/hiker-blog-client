import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyBLogs from "./Components/Dashboard/MyBLogs";
import About from "./Components/Page/About/About";
import Blogs from "./Components/Page/Blogs/Blogs";
import Contact from "./Components/Page/Contact/Contact";
import Destination from "./Components/Page/Destination/Destination";
import Details from "./Components/Page/Details/Details";
import Home from "./Components/Page/Home/Home";
import Login from "./Components/Page/Login/Login";
import Footer from "./Components/Shared/Footer/Footer";
import Navigation from "./Components/Shared/Navigation/Navigation";
import ProvideAuth from "./Firebase/Context/ProvideAuth";
import PrivateRoute from "./Firebase/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
     <ProvideAuth>
     <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<PrivateRoute><Blogs></Blogs></PrivateRoute>}></Route>
          <Route path="/details/:_id" element={<Details></Details>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<MyBLogs />} />
            <Route path="/dashboard/manageblogs" element={<MyBLogs />} />
            <Route path="/dashboard/makeadmin" element={<MyBLogs />} />
            <Route path="/dashboard/createblog" element={<MyBLogs />} />
          </Route>
          <Route path="/destination" element={<Destination></Destination>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     </ProvideAuth>
    </div>
  );
}

export default App;
