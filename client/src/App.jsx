import Home from "./Pages/Home"
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
// import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
    // const user = false;
  
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/products/:category" element={<ProductList/>}/>
        <Route  path="/products" element={<ProductList/>}/>
        <Route  path="/product/:id" element={<Product/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/success" element={<Success/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
};

export default App;