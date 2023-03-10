import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Header} from './components/Header';
import {Add} from './components/Add';
import {Watched} from './components/Watched';
import {Watchlist} from './components/Watchlist';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        {/* on every single page */}
        <Header/>

        <Routes>
          <Route exact path="/bookshelf" element={<Watchlist/>}/>
          <Route exact path="/watched" element={<Watched/>}/>
          <Route exact path="/add" element={<Add/>}/>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
