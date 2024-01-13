import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img.freepik.com/free-photo/finance-elements-frame_23-2148080960.jpg?w=826&t=st=1694364910~exp=1694365510~hmac=f0241834ed858330ec16e698eaa76f629d51b79730052e7efc391910bd2e6898") no-repeat fixed center;
display: flex;
background-size:cover;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
`;

const Title = styled.h1`
font-size:24px;
font-weight: 300;`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex:1;
min-width: 40%;
margin:20px 10px 0px 0px;
padding: 10px;
`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`;

const Button = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor:pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Create an Account</Title>
        <Form>
        <Input placeholder ='name'/>
        <Input placeholder ='last name'/>
        <Input placeholder ='username'/>
        <Input placeholder ='email'/>
        <Input placeholder ='password'/>
        <Input placeholder ='confirm password'/>
        <Agreement>
            By creating the account ,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
