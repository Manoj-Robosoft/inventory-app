import "./App.css";

import AccordionContainer from "../accordionContainer/AccordionContainer";
import Search from "../search/Search";
import Profile from "../profile/Profile";
import Sidebar from "../sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__content">
        <h2 className="app__heading">Inventory Builder</h2>
        <Profile />
        <div className="app__body">
          <Search />
          <div className="item__header">
            <ul>
              <li>ITEM NAME</li>
              <li>COLOR</li>
              <li>OPTIONS</li>
              <li>SKU ID</li>
              <li>STOCKS</li>
              <li className="actionsText">ACTIONS</li>
            </ul>
          </div>

          <AccordionContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
