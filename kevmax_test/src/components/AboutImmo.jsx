import React from 'react'
import styled from 'styled-components'
import { FiInstagram } from 'react-icons/fi';
import {RiFacebookFill,RiTwitterFill} from 'react-icons/ri'
import {BiChevronRight} from 'react-icons/bi'
import AboutElement from './AboutElement';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
`
const Title = styled.h5`
    text-align: center;
`
const Wrapper = styled.div`
    width: 52%;
    display: flex;
    justify-content:space-around;
    align-items: center;
    flex-wrap: wrap;
`
const SocialMedia = styled.div`
    width: 170px;
    padding: 15px;
    background-color: purple;
    border-radius: 5px;
    color: white;
`
const Facebook = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
`
const Instagram = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
`
const Twitter = styled.div`
    display: flex;
    justify-content: space-between;
`
const Icon = styled.div``
const Arrow = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:lightgray;
    color: black;
`

const AboutImmo = () => {
    return (
        <Container>
            <Title>Tout savoir sur Immo</Title>
            <Wrapper>
                <AboutElement/>
                <AboutElement/>
                <AboutElement/>
                <AboutElement/>
                <AboutElement/>
                <SocialMedia>
                    <Title>Réseaux sociaux</Title>
                    <Facebook>
                        <Title>Facebook</Title>
                        <Icon><FiInstagram/></Icon>
                        <Arrow><BiChevronRight/></Arrow>
                    </Facebook>
                    <Instagram>
                        <Title>Instagram</Title>
                        <Icon><RiFacebookFill/></Icon>
                        <Arrow><BiChevronRight/></Arrow>
                    </Instagram>
                    <Twitter>
                        <Title>Twitter</Title>
                        <Icon><RiTwitterFill/></Icon>
                        <Arrow><BiChevronRight/></Arrow>
                    </Twitter>
                </SocialMedia>
            </Wrapper>
            
        </Container>
    )
}

export default AboutImmo
