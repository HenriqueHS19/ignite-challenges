import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { CartContext } from '../../context/Cart';

import logo from '../../assets/logo.svg';

import { HeaderContainer } from "./styles";

export function Header() {
    const { totalAmountCoffee } = useContext(CartContext);

    return (
        <HeaderContainer>
            <header>
                <Link to='/'>
                    <img src={logo} alt="Logo coffe Delivery" />
                </Link>

                <nav>
                    <span>
                        <MapPin size={24} />
                        São Paulo, SP
                    </span>

                    <NavLink to="/checkout" className={ totalAmountCoffee != 0 ? 'cartWithProduct' : ''}>
                        {totalAmountCoffee != 0 && (
                            <span>
                                {totalAmountCoffee}
                            </span>   
                        )}
                        <ShoppingCart size={24} />
                    </NavLink>
                </nav>
            </header>
        </HeaderContainer>
    );
}