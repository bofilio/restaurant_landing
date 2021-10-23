import Baner from "./components/Baner";
import Booking from "./components/Booking";
import Food from "./components/Food";
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
   </>
  );
}

export default App;
