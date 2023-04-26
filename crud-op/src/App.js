import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import AddUser from "./Operation/AddUser";
import EditUser from "./Operation/EditUser";
import ViewUser from "./Operation/ViewUser";

function App(props) {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>

          <Route path="/operation/add" element={<AddUser/>}></Route>
          <Route path="/operation/edit/:id" element={<EditUser/>}></Route>
          <Route path="/operation/:id" element={<ViewUser/>}></Route>


          <Route path="/*" element={<NotFound/>}>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
