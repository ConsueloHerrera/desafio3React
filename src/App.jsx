import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
// import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <Home></Home> */}
      <Cart></Cart>
      <Footer></Footer>
    </>
  );
}

export default App;