import React from 'react';
import Link from './Routing/Link';

function Error404() {
    return (
        <div className="error-container bg-gray-800 h-screen flex-1 flex flex-col justify-center">
            <div className="error-content min-w-max mb-40">
                <span className="_404">404</span>
                <hr />
                <span className="_1 leading-tight">THE PAGE</span>
                <span className="_2">WAS NOT FOUND</span>
                <div className="w100 flex justify-center">
                    <Link className="back-btn mt-8 text-gray-800 text-2xl font-semibold" href="/" label="Back home" />
                </div>
            </div>
        </div>
    );
}

export default Error404;
