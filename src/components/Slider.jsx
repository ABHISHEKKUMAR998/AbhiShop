import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: aquamarine;
    position: relative;   
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    bottom: 0;
    right:${props => props.direction === 'right' && '10px'};
    left:${props => props.direction === 'left' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`
const ImageContainer = styled.div`
flex:1;
height: 100%;
`
const Image = styled.img`
  height  : 80%;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Tittle = styled.h1`  
font-size  :70px ;
`
const Desc = styled.p` 
margin: 50px 0px;
letter-spacing   : 3px;
font-size: 20px;
font-weight: 500;
`
const Button = styled.button`   
padding : 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
      if(direction ==='left'){
        setSlideIndex(slideIndex > 0 ?slideIndex-1:2)
      }else{
        setSlideIndex(slideIndex < 2 ?slideIndex+1:0)
      }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((items) => {
                    return (
                    <Slide bg={items.bg} key = {items.id}>
                        <ImageContainer>
                            <Image src={items.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Tittle>
                                {items.title}
                            </Tittle>
                            <Desc>
                                {items.desc}
                            </Desc>
                            <Button>
                                SHOP NOW
                            </Button>
                        </InfoContainer>
                    </Slide>
                    )
                })}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("Right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>

    )
}

export default Slider
