import React, { useState, useEffect } from 'react';
import Error404 from './components/Error404';
import Route from './components/Routing/Route';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import FXRates from './components/FXRates';
import Converter from './components/Converter';
import Countries from './components/Countries';

function App() {
  const [activeRoute, setActiveRoute] = useState();
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setCurrentRoute(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => { 
      window.removeEventListener('popstate', onLocationChange) 
    };
  }, [])


  const displayErrorPage = () => activeRoute !== currentRoute ? <Error404 /> : null;

  return (
    <div>
      <Header activeRoute={activeRoute}/>
      <Route path="/" currentRoute={currentRoute} setActive={setActiveRoute}>
        <Home />
      </Route>
      <Route path="/fx-rates" currentRoute={currentRoute} setActive={setActiveRoute}>
        <FXRates />
      </Route>
      <Route path="/converter" currentRoute={currentRoute} setActive={setActiveRoute}>
        <Converter />
      </Route>
      <Route path="/countries" currentRoute={currentRoute} setActive={setActiveRoute}>
        <Countries />
      </Route>
      {displayErrorPage()}
      <Footer />
    </div>
  );
}

export default App;
