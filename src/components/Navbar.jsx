import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge'

const Container = styled.div`
height:60px;
`;

const Wrapper = styled.div`
padding:10px 10px;
display:flex;
justify-content:space-between;
`;

const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`;

const Center = styled.div`
flex:1;
display:flex;
justify-content:center`;

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end`
  ;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Logo = styled.h1`
font-weight:bold
`;

const SearchBar = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
`;
const Items = styled.div`
  font-size: 15px;
  margin-left: 18px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchBar>
            <Input placeholder="Search"/>
            <SearchIcon style ={{color:'gray',fontSize:16}}/>
          </SearchBar>
        </Left>
        <Center>
          <Logo>
            AbhiShop
          </Logo>
        </Center>
        <Right>
          <Items>
            SIGN IN
          </Items>
          <Items>
            LOG IN
          </Items>
          <Items>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Items>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
