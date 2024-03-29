import styled from "styled-components"
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImageContainer = styled.div`
flex:1;
`;

const Image = styled.img`
width: 100%;
height: 70vh;
object-fit:cover
`;

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`;

const  Title = styled.h1`
font-weight:200;`;

const Desc = styled.p`
margin:20px 0px;`;

const Price = styled.span`
font-weight:100;
font-size:30px`;

const FilterContainer = styled.div`
width: 50%;
margin:30px 0px;
display:flex;
justify-content: space-between;
`;

const Filter = styled.div`
display: flex;
align-items: center;
`
;

const FilterTitle = styled.span`
font-weight: 200;
font-size:20px

`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor:pointer;
`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border:1px solid teal;
border-radius:10%;
margin:0px 5px
`;

const Button = styled.button`
padding: 15px;
border: 3px solid teal;
border-color:white;
cursor:pointer;
font-weight: 500;
&:hover{
    background-color:#f8f8f4
}
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Annoucement/>
      <Wrapper>
        <ImageContainer>
            <Image src ="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"/>
        </ImageContainer>
        <InfoContainer>
                  <Title>Printed Shirt</Title>
                  <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque eum minima vel, cum aut omnis? Cum libero soluta atque, doloremque totam nam perferendis incidunt exercitationem, odit sint obcaecati ex!</Desc>
                  <Price>550₹</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                          <FilterColor color="black" />
                          <FilterColor color="darkblue" />
                          <FilterColor color="gray" />
                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                              <FilterSizeOption>S</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                              <FilterSizeOption>XXL</FilterSizeOption>
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove />
                          <Amount>1</Amount>
                          <Add />
                      </AmountContainer>
                      <Button>Add to Cart</Button>
                  </AddContainer>
              </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
