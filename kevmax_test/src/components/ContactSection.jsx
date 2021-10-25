import React from 'react'
import styled from 'styled-components'
import {BsPhone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'

const Container = styled.div`
    padding: 20px 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #F0EFED;
`
const PhoneContact = styled.div`
    flex:1;
    background-color: white;
    padding: 10px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 10px;
`
const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h5`
    margin: 10px;
`
const Button = styled.button`
    height: 25px;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    background-color:#${props => props.bg};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmailContact = styled.div`
    flex:1;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
`
const Website = styled.div`
    flex:1;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    padding-bottom: 55px;
`

const ContactSection = () => {
    return (
        <Container>
            <PhoneContact>
                <Head>
                    <BsPhone/>
                    <Title>APPELEZ-NOUS</Title>
                </Head>
                <Title>VOUS VOULEZ UNE RÉPONSE IMMÉDIATE ?</Title>
                <p>appelez-nous ou WhatsApp</p>
                <Button bg="F08A5D">652834912</Button>
            </PhoneContact>
            <EmailContact>
                <Head>
                    <AiOutlineMail/>
                    <Title>ÉCRIVEZ-NOUS</Title>
                </Head>
                <Title>CONTACTEZ NOUS </Title>
                <p>Nous répondons à votre courier dans un cour delai</p>
                <Button bg="6A2C70">Immo@info.com</Button>
            </EmailContact>
            <Website>
                <Head>
                    <CgWebsite/>
                    <Title>RENDEZ NOUS VISITE</Title>
                </Head>
                <Title>NOTRE ADRESSE </Title>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
            </Website>          
        </Container>
    )
}

export default ContactSection
