import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Page/About/About";
import Blogs from "./Components/Page/Blogs/Blogs";
import Contact from "./Components/Page/Contact/Contact";
import Destination from "./Components/Page/Destination/Destination";
import Home from "./Components/Page/Home/Home";
import Login from "./Components/Page/Login/Login";
import Register from "./Components/Page/Register/Register";
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
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/destination" element={<Destination></Destination>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     </ProvideAuth>
    </div>
  );
}

export default App;
