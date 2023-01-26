// DEPENDENCIES 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//PAGES
import Edit from "./Pages/Edit"
import FourOFour from "./Pages/FourOfFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";


// COMPONENTS 
import NavBar from "./Components/NavBar"


function App() {
  return (
    <div className="App">
     <Router>
      <NavBar className="nav"/>
      <main className="App-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/songs" element={<Index/>}/>
          <Route path="/songs/new" element={<New/>}/>
          <Route path="/songs/:id" element={<Show/>}/>
          <Route path="/songs/:id/edit" element={<Edit/>}/>
          <Route path="*" element={<FourOFour/>}/>
        </Routes>
      </main>
     </Router>
     <footer className="page-footer"> Demo app Y.R</footer>
    </div>
  );
}

export default App;
