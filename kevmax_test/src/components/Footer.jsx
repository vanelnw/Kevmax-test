import React from 'react'
import styled from 'styled-components'
import { FiInstagram } from 'react-icons/fi';
import {RiFacebookFill,RiTwitterFill} from 'react-icons/ri'

const Container = styled.div`
    background-color: black;
    width: 100vw;
    height: 150px;
`
const First = styled.div`
    padding: 20px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom:50px;
`
const TextContainer = styled.div``
const Copyright = styled.p`
    font-size: 14px;
    color: white;
`
const Phone = styled.p`
    color: white;
`
const Language = styled.div`
    display: flex;
`
const Select = styled.select``
const Option = styled.option``
const SocialContainer = styled.div`
    padding: 0px 20px;
    display: flex;
    color: white;
`
const SocialIcon = styled.div`
    width: 14px;
    height: 14px;
    margin-right: 10px;
    color: white;
`
const Second = styled.div`
    padding-bottom: 25px;
`
const Ligne = styled.hr`
    background-color: white;
`
const Image = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: transparent;
`

const Footer = () => {
    return (
        <Container>
            <First>
                <TextContainer>
                    <Copyright>
                        ©2021 Immo - un site fourni, sûre et destiné exclusivement aux ventes de biens immobiliers au Cameroun.
                    </Copyright>
                    <Phone>
                        - Yaoundé BP: 2424 -téléphones: 694 790 869/ +222 44 44 44
                    </Phone>
                </TextContainer>
                <Language>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqAp9shdalHtTX7nxMoPgo9qQ0-eUVlZHEg&usqp=CAU"/> 
                    <Select>
                        <Option>Francais</Option>
                        <Option>Anglais</Option>
                    </Select>
                </Language>
                <SocialContainer>
                    <SocialIcon>
                        <FiInstagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <RiFacebookFill/>
                    </SocialIcon>
                    <SocialIcon>
                        <RiTwitterFill/>
                    </SocialIcon>
                </SocialContainer>
            </First>
            <Second>
                <Ligne />
                <Copyright>
                    © 2021 Kevmax.com | Politique de confidentialité | Clause de non-responsabilité
                </Copyright>
            </Second>
        </Container>
    )
}

export default Footer
