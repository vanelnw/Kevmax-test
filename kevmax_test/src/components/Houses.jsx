import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
   
`
const House = styled.div`
width: 190px;
padding-bottom: 20px;
margin: 10px;

background-color: white;
`
const Image = styled.img`
    width:100%;
    height: 60%;
    padding: 0;
`
const Location = styled.p`
 margin: 20px 0px;
 padding:0px 10px;
 font-size: 13px;
`
const Title = styled.h4`
    padding:0px 5px;
`
const Price = styled.h4`
    padding:0px 5px;
`
const Houses = () => {
    const data = [
        {id:1,
        title:"Maison de village 3 pièces",
        locate:"Yaounde Olembe, 150 m²",
        price:"17 200 000 XAF",
        url:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
        },
        {id:2,
            title:"Maison de village 2 pièces",
            locate:"Yaounde Nkoabang, 100 m²",
            price:"20 200 000 XAF",
            url:"https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__480.jpg"
        },
        {id:3,
            title:"Maison de village 1 étage",
            locate:"Yaounde Nkoabang, 100 m²",
            price:"5 100 000 XAF",
            url:"https://thumbs.dreamstime.com/b/california-angels-camp-houses-real-old-western-usa-36803296.jpg"
        },
        {id:4,
            title:"Maison de village 2 pièces",
            locate:"Yaounde Nkoabang, 100 m²",
            price:"17 200 000 XAF",
            url:"https://media.istockphoto.com/photos/new-cozy-cottage-picture-id483773209?k=20&m=483773209&s=612x612&w=0&h=1cThGUomps6m_CR7F_VoZeQOxeAw9IoOzs-xuOLvtcQ="
        },
        
        {id:5,
            title:"Maison de village 2 pièces",
            locate:"Yaounde Bastos, 500 m²",
            price:"35 000 000 XAF",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2win_w8LLwmevSCn76o70C4XZf9bpvyPDoAKfPZichyfurIGNLOD2OlYi0obB7eMfaxA&usqp=CAU"
        }
    ]
    return (
        <Container>
            {data.map(item => (
                <House key={item.id}>
                    <Image src={item.url}/>
                    <Title> {item.title}</Title>
                    <Location>{item.locate}</Location>
                    <Price>{item.price}</Price>
                </House>
            ))}
            
        </Container>
    )
}

export default Houses
