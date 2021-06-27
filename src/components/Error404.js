import React from 'react';
import Link from './Routing/Link';

function Error404() {
    return (
        <div class="error-container h-12/12 flex flex-col justify-center">
            <div className="error-content min-w-max mb-20">
                <span className="_404">404</span>
                <hr />
                <span className="_1 leading-tight">THE PAGE</span>
                <span className="_2">WAS NOT FOUND</span>
                <div className="w100 flex justify-center">
                    <Link className="back-btn mt-8" href="/" label="Back home" />
                </div>
            </div>
        </div>
    );
}

export default Error404;
