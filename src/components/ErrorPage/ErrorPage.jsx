import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <h2>404 Error</h2>
            <Link className='btn btn-primary' to="/">Go back to home</Link>
        </>
    );
};

export default ErrorPage;