//import './globale.css';
import pin from './imgs/pin-icon.png';
import menu from './imgs/menu.png';
import menu_icon from './imgs/menu-icon.png';
import toleft from './imgs/toleft.png';
import toright from './imgs/toright.png';
import user_icon from './imgs/User-icon.png';
import vector from './imgs/Vector.png';
import './App.css';
import './globale.css';
function App() {
  return (
    <div className="d-flex flex-column container">
      <div className="d-flex flex-row relative flex-grow">

        <div id="left-bar" className="flex-grow flex-column">
          <div className="d-flex align-items-center">
            <div id="logo" style={{ height: '108px', lineHeight: '108px' }}>
              expice
            </div>
            <div id="header-menu" className="flex-grow d-flex d-center">
              <a className="menu-item mr-8" href="#one">Menu One</a>
              <a className="menu-item mr-8" href="#two">Menu Two</a>
              <a className="menu-item mr-8" href="#three">Menu Three</a>
              <a className="menu-item" href="#four">Menu Four</a>
            </div>
          </div>
          <div id="Heading" >
            <p className="bg-text">Food</p>
            <p className="branding m-t-4 ml-2">Discover Restaurant & Delicious Food</p>
            <form className=" search-form p-2 mt-4 bg-white">
              <input type="text" name="search" placeholder="search restaurant, food" />
              <button type="button">GO</button>
            </form>
          </div>

          <div id="location" className="d-flex d-center p-3">
            <img src={pin} width="20px" height="25px" alt="pin" />
            <span className="white ml-4">Rajshahi</span>
          </div>
        </div>

        <div id="right-bar">
          <div id="user-panel">
            <div id="user-icon">
              <img src={user_icon} height="30" width="30" alt="user icon" />
            </div>
            <div id="user-text ">
              <span className="white ml-2">User</span>
              <img className="ml-2" src={vector} width="10px" height="4.4px" alt="arrow" />
            </div>
          </div>
          <div id="Menu-icon">
            <img src={menu_icon} height="20px" width="40px" alt="menu icon"/>
          </div>
          <div id="arrows" className="d-flex d-center absolute">
            <div >
              <img className="arrow" src={toleft} alt='to left' width="66px" height="45px"/>
            </div>
            <div className="ml-2">
            <img className="arrow" src={toright} alt='to left'/>
            </div>
          </div>
        </div>
        <div id="menu" className="absolute mt-8">
          <img src={menu} width="100%" height="auto" alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default App;
