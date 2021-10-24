import Baner from "./components/Baner";
import Booking from "./components/Booking";
import DownloadApp from "./components/DownloadApp";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Services from "./components/Services";
import TopResaurants from "./components/TopResaurants";
import './css/globale.css';
function App() {
  return (
   <>
   <Baner/>
   <TopResaurants/>
   <Booking/>
   <Services/>
   <Food/>
   <DownloadApp/>
   <Footer/>
   </>
  );
}

export default App;
