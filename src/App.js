import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Page/About/About";
import Blogs from "./Components/Page/Blogs/Blogs";
import Contact from "./Components/Page/Contact/Contact";
import Destination from "./Components/Page/Destination/Destination";
import Home from "./Components/Page/Home/Home";
import Login from "./Components/Page/Login/Login";
import Footer from "./Components/Shared/Footer/Footer";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/destination" element={<Destination></Destination>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
