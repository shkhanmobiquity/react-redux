import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const LayoutPage = () => {
    return <React.Fragment>
        <Header/>
           <main className="page-content">
                <Outlet/> 
           </main>
        <Footer/>
    </React.Fragment>
}

export default LayoutPage;