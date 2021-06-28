import React, { useEffect } from 'react';

const Route = ({path, currentRoute, setActive, children}) => {
    
    useEffect(() => {
        if(currentRoute === path) {
            setActive(currentRoute);
        }
    }, [currentRoute])

    return path === currentRoute ? children : null;
}

export default Route;