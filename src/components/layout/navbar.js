import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Navbar = ({ title }) => {
    return (
        <nav className='navbar navbar-primary'>
            <h1>{title}</h1>
            <Menu
                isOpen={true}
                burgerButtonClassName={'burger-btn'}
                burgerBarClassName={'burger-bars'}
                menuClassName={'bm-menu'}
                crossButtonClassName={'bm-cross-button'}
                crossClassName={'bm-cross'}
            >
                <a id='about' className='menu-item' href='/about'>
                    ABOUT US &amp; WHO WE ARE
                </a>
                <a id='expect' className='menu-item' href='/expect'>
                    WHAT TO EXPECT
                </a>
                <a id='contact' className='menu-item' href='/programs'>
                    PROGRAMS
                </a>
                <a id='team' className='menu-item' href='/team'>
                    MEET THE TEAM
                </a>
            </Menu>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'LLCC CM',
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
