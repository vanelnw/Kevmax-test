import React from 'react'
import styled from 'styled-components';
import {IoDiamondOutline} from 'react-icons/io5'
import {ImPhone} from 'react-icons/im'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './NavbarElements';

const Container = styled.div`
  height: 100px;
  width: 100%;
`
const Wrapper = styled.div`
 width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
`
const Icon = styled.div`
  color:#F08A5D ;
  margin-left:10px;
`
const PhoneIcon = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 30px;
  background-color: purple;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
    background-color: purple;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px 10px 10px 80px ;
`

const NavBar = () => {
    return (
        <Container>
        <Wrapper>
        <Left >
         <Logo>
          <h2>Immo</h2>
          <Icon><IoDiamondOutline/></Icon>
         </Logo>
        </Left>
        <Nav>
        
        <NavMenu>
          <NavLink to='/acceuil' activeStyle>
            Acceuil
          </NavLink>
          <NavLink to='/apropos' activeStyle>
            A propos de nous
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Mise en location
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact 
          </NavLink>
        </NavMenu>
        <PhoneIcon ><ImPhone/></PhoneIcon>
        <Bars />
      </Nav>
      </Wrapper>
    </Container>
    )
}

export default NavBar
