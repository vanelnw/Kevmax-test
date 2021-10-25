import React from 'react'
import styled from 'styled-components'
import CommentSlider from './CommentSlider'
import Rapport from './Rapport'

const Container = styled.div`
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;  
`
const Image = styled.img`
    width: 100%;
    height:50%;
`
const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background-color:rgba(0,0,0,0.8);
`
const First = styled.div`
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    margin: 20px 0px;
`
const Second = styled.div`
    display: flex;
    justify-content:center;
`
const AvisCommentSection = () => {
    return (
        <Container>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkioBc1d6t3B5GrkJWTuaJpn4QPnVYM3V_Q&usqp=CAU"/>
            <Wrapper>
                <First>
                    <Rapport bg="B83B5E" title="vente" avis="4.5" real="1.4"/>
                    <Rapport bg="F08A5D" title="achats" avis="4.5" real="824"/>
                </First>
                <Second>
                <CommentSlider/>
                </Second>
            </Wrapper>
        </Container>
    )
}

export default AvisCommentSection
