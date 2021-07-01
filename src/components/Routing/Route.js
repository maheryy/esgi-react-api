import { useEffect } from 'react';

const Route = ({ path, currentRoute, setActive, children }) => {

    useEffect(() => {
        if (currentRoute === path) {
            setActive(currentRoute);
        }

        // eslint-disable-next-line
    }, [currentRoute, path])

    return path === currentRoute ? children : null;
}

export default Route;