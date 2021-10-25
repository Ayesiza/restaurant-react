import "./App.css";
import Dishes from "./components/dishes/Dishes";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
//import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
//import Search from './components/search/Search';

function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Home />
      <Dishes />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
