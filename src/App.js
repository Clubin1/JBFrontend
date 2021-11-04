import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './Components/Home/HomePage';
import OrderPage from './Components/Orders/OrderPage';
import Navbar from './Components/UI/Navbar';
import Footer from './Components/UI/Footer';
import NotFound from "./Components/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/order" component={OrderPage}/>
        <Route component={NotFound}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
