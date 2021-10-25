import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 360px;
    height: 130px;
    padding: 10px;
    background-color:#${props => props.bg };
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:5px;
`
const Circle = styled.div`
    border: 1px solid white;
    border-radius: 50%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 10px;
`
const Title = styled.h4`
    margin-bottom: 30px;
`
const Rapport = (props) => {
    return (
        <Container bg={props.bg}>
            <Circle>{props.avis}</Circle>
            <Title>avis {props.title}</Title>
            <Circle>{props.real}</Circle>
            <Title>{props.title}</Title>
        </Container>
    )
}

export default Rapport
