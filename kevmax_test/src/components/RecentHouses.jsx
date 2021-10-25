import React from 'react'
import styled from 'styled-components'
import Houses from "./Houses"

const Container = styled.div`
    padding: 20px 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #F0EFED;
`
const Title = styled.h1`
    font-size: 14px;
    font-weight: 500;
`
const Icon  = styled.img``
const Button = styled.button`
     height: 25px;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    background-color:purple;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RecentHouses = () => {
    return (
        <Container>
            <Title>Nos maisons les plus récentes</Title>
            <Houses/>
            <Button>Voir l'offre complete</Button>
        </Container>
    )
}

export default RecentHouses
