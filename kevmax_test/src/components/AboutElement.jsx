import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 198px;
    height: 175px;
    border-radius:5px;
    position: relative;
    margin:10px 0px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius:5px;
`
const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, #9c497e, transparent);
    color: white;
`
const Title = styled.h4`
    color: #F08A5D ;
    padding: 10px;
`
const Description = styled.p`
    padding: 10px;
`
const AboutElement = () => {
    return (
        <Container>
            <Image src="https://thumbs.dreamstime.com/b/home-staging-steps-ideas-162204186.jpg"/>
            <Wrapper>
            <Title>Propriétés disponibles</Title>
            <Description>
                À la recherche d'une nouvelle maison?
            </Description>
            </Wrapper>
        </Container>
    )
}

export default AboutElement
