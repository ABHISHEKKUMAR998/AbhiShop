import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
    const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column`

    const Title = styled.h1`
    font-size:70px;`;

    const Description = styled.div`
    margin: 20px;
    font-size: 24px;
    font-weight: 280;
    `;
    const InputContainer = styled.div`
    width: 70vw;
    height: 40px;
    border: 1px solid grey;
    background-color: white;
    display: flex;
    justify-content: space-between;
    `;
    const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px`;

    const Button = styled.button`
    flex:1;
    background-color:teal;
    color: white;
    border: none;
    `;

  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely update from your favourite products</Description>
        <InputContainer>
         <Input placeholder='Your Email'/>
         <Button>
            <Send/>
         </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
