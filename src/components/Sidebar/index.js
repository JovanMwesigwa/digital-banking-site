import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarItem, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return(
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarItem>
            <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
            <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
            <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
            <SidebarLink to='signup' onClick={toggle}>Sign up</SidebarLink>
          </SidebarItem>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
   )

 }

export default Sidebar