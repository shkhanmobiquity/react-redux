import React from 'react';
import { useSelector } from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
// Config
import { NAVIBARIONS, IRoute } from '../../../../core/configs/routes';
import { cartItemsSelector } from '../../../../stores/cart';

const Header = () => {
    const items = useSelector(cartItemsSelector);
    return <React.Fragment>
        <header className="website-header container-fluid border-bottom border-1 pt-1 pb-1">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <nav className="main-navigation">
                        <ul className='d-flex aling-items-center justify-content-start m-0 list-unstyled'>
                            {
                                NAVIBARIONS.map((nav: IRoute) => {
                                    return <li key={nav.id} className='mx-2'>
                                        <NavLink  to={nav.path} className={({isActive}) => {
                                            const defaultClassess = 'py-2 px-4 d-block btn text-decoration-none fs-6 text-black';
                                            return isActive ? `${defaultClassess} btn-primary text-white`: defaultClassess
                                        }}> {nav.label} </NavLink>
                                    </li> 
                                })
                            }
                        </ul>
                    </nav>
                    
                    <Link to={'/cart'}>
                        <div className="cart-button d-inline-flex align-items-center btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span className='px-2'>Cart</span>{items.length}
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    </React.Fragment>
}

export default Header;