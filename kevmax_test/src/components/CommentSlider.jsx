import React from 'react'
import {BiChevronLeft,BiChevronRight,BiLike} from 'react-icons/bi'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px 200px;
`
const Comment = styled.div`
    flex:1;
    margin: 10px 20px;
`
const Icon = styled.div`
    color: #F08A5D;
    margin-right: 5px;
`
const Description = styled.p`
    padding: 20px 0px;
`
const Like = styled.div`
    display: flex;
`
const Title = styled.h3``
const DirectionArrow = styled.div`
    display: flex;
`
const ArrowItem = styled.div`
    width: 25px;
    height: 25px;
    background-color: lightgray;
    margin: 5px;
    display: flex;
    justify-content:center;
    align-items: center;

`
const Comments = styled.div`
     display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
`

const CommentSlider = () => {
    return (
        <Container>
            <Title>Commentaires</Title>
            <Icon src="../images/Trace.png"/>
            <Comments>
            <Comment>
                <Title>Acheteur</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                </Description>
                <Like>
                    <Icon><BiLike/></Icon>
                    <h5>Oui, je recommande Immo</h5>
                </Like>
            </Comment>
            <Comment>
                <Title>Vendeur</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                </Description>
                <Like>
                    <Icon><BiLike/></Icon>
                    <h5>Oui, je recommande Immo</h5>
                </Like>
            </Comment>
            </Comments>
            <DirectionArrow>
                <ArrowItem>
                    <BiChevronLeft/>
                </ArrowItem>
                <ArrowItem>
                    <BiChevronRight/>
                </ArrowItem>         
            </DirectionArrow>
            
        </Container>
    )
}

export default CommentSlider
