import React, { useState, useEffect } from 'react';
import Error404 from './components/Error404';
import Home from './components/Home';
import Route from './components/Routing/Route';

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
      <Route path="/" currentRoute={currentRoute} setActive={setActiveRoute}>
        <Home />
      </Route>
      {displayErrorPage()}
    </div>
  );
}

export default App;
