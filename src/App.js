import Header from './Components/Header.js'
import Login from './Components/Login.js';
import Footer from './Components/Footer.js';
import Create from './Components/Create.js';
import Product from './Components/Product.js';
import Faltu from './Components/Faltu.js';
import Edit from './Components/Edit.js';
import Listing from './Components/Listing.js';
import Cart from './Components/Cart.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      {/* <Create /> */}
      {/* <Product /> */}
      {/* <Edit /> */}
      <Listing />
      {/* <Cart /> */}
      {/* <Faltu /> */}
      <Footer />
    </div>
  );
}

export default App;
