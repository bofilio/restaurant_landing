import Baner from "./components/_00_Baner";
import TopResaurants from "./components/_01_TopResaurants";
import Services from "./components/_03_Services";
import Booking from "./components/_02_Booking";
import DownloadApp from "./components/_05_DownloadApp";
import Food from "./components/_04_Food";
import Footer from "./components/_06_Footer";


import './css/globale.css';
function App() {
  return (
   <div className="container">
   <Baner/>
   <TopResaurants/>
   <Booking/>
   <Services/>
   <Food/>
   <DownloadApp/>
   <Footer/>
   </div>
  );
}

export default App;
