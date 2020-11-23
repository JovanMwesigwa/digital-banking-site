import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavbarMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ isOpen, toggle }) => {
  return(
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to=''>dolla</NavLogo>

                <MobileIcon onClick={toggle}>
                    {
                        isOpen ? <FaTimes /> : <FaBars />
                    }
                </MobileIcon>

                <NavbarMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign Up</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarMenu>
            </NavbarContainer>
        </Nav>
    </>
   )

 }

export default Navbar