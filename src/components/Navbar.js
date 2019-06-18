import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import logo from '../logo.svg'
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="logo" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav nav-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/Cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = styled.nav `
    background: var(--mainBlue) !important;
    .nav-link {
        text-transform: capitalize;
        color: var(--mainWhite) !important;
        font-size: 1.4rem;
    }
`

