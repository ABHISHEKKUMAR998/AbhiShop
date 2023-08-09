import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const Container = styled.div`
    display: flex;
    `;

    const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    `;

    const Logo = styled.h1``;

    const Description = styled.p`
    margin:20px 0px`;

    const SocialContainer = styled.div`
    display:flex;
   `;

    const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content: center;
    color:white;
    background-color:#${props=>props.color};`


    const Center = styled.div`
    flex:1;
    padding: 20px;`;

    const Title = styled.h3`
    margin-bottom :30px`;

    const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display:flex;
    flex-wrap:wrap`;

    const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px`;

    const Right = styled.div`
    flex:1;
    padding: 20px;`;

  return (
    <Container>
        <Left>
          <Logo>AbhiShop.</Logo>
          <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tenetur iure ut totam, nihil odio laboriosam, libero quidem omnis officiis enim delectus debitis. Assumenda officia dolore quo voluptates quasi quia.
          </Description>
          <SocialContainer>
          <SocialIcon color="3B5999">
             <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
             <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
             <Twitter/>
          </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
           <Title>Useful Links</Title>
           <List>
           <ListItem>Home</ListItem>
           <ListItem>Cart</ListItem>
           <ListItem>Man Fashion</ListItem>
           <ListItem> Woman fashion</ListItem>
           <ListItem>Accessiores</ListItem>
           <ListItem> My Account</ListItem>
           <ListItem> Order Tracking</ListItem>
           <ListItem>Wishlist</ListItem>
           <ListItem>Terms</ListItem>
           </List>
        </Center>
        <Right>

        </Right>
    </Container>
  )
}

export default Footer
