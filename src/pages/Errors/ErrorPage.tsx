import React from 'react';
import Footer from '../Layout/components/Footer/Footer';
import Header from '../Layout/components/Header/Header';
// CSS
import './ErrorPage.scss'
const ErrorPage = () => {
    return <React.Fragment>
        <Header/>
        <main className="error-page d-flex">
            <div className="container align-self-center">
                <h1 className="text-center">404</h1>
                <h6 className="text-center">Not Found</h6>
                <p className="text-center">The resource requested could not be found on this server!</p>
            </div>
        </main>
        <Footer/>
    </React.Fragment>
}

export default ErrorPage;