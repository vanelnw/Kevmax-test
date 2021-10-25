import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import {AiOutlineDown} from "react-icons/ai"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:lightgray;
    position: relative;
    display: flex;
   
    align-items: center;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Description = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: white;
    margin-top: 200px;
`
const SearchContainer = styled.div`
    width: 40vw;
    height: 40px;
    padding: 2px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    margin: 100px 0px;
`
const Input = styled.input`
    height: 100%;
    border: none;
    flex: 9;
`
const Button = styled.button`
    height: 100%;
    background-color: purple;
    color: white;
    border: none;
    border-radius: 4px;
    flex: 3;
`
const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color:purple;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroSection = () => {
    return (
        <Container>
            <Image src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <Wrapper>
            <NavBar/>
            <Description>trouver le bonheur dans la maison de vos réve avec immo</Description>
            <SearchContainer>
                <Input placeholder="Bien,place..."/>
                <Button>Chercher un bien</Button>
            </SearchContainer>
            <Arrow>
               <AiOutlineDown/>
            </Arrow>
            </Wrapper>
        </Container>
    )
}

export default HeroSection
