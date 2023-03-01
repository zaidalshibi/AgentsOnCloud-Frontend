import { useState } from "react";
import styled from "styled-components";
import { mobile, tab } from "../responsive";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile( { width: "75%" } )}
  ${tab( { width: "50%" } )}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const SignUp = () => {
    const [ username, setUsername ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' );
    const [ password1, setPassword1 ] = useState( '' );
    const [ password2, setPassword2 ] = useState( '' );
    const [ error, setError ] = useState( false );


    const handleRegister = ( e ) => {
        e.preventDefault();
        const registerUser = async () => {
            try {
                const user = { username, email, password: password1, firstName, lastName };
                await axios.post( `${process.env.REACT_APP_API_URL}/signup`, user )
                    .then( res => {
                        localStorage.setItem( 'token', res.data.token );
                        localStorage.setItem( 'id', res.data.id );
                        localStorage.setItem( 'username', res.data.username );
                        window.location.replace( '/' );
                        setError( false );
                    } ).catch( err => {
                        console.log( err );
                        setError( true );
                    }
                    );
            } catch ( err ) {
                console.log( err );
                setError( true );
            }
        };
        if ( password1 === password2 ) {
            registerUser();
        }
    };
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                {error && <p style={{ color: 'red' }}>Something went wrong</p>}
                <Form>
                    <Input onChange={e => setFirstName( e.target.value )} placeholder="first name" />
                    <Input onChange={e => setLastName( e.target.value )} placeholder="last name" />
                    <Input onChange={e => setUsername( e.target.value )} placeholder="username" />
                    <Input onChange={e => setEmail( e.target.value )} placeholder="email" />
                    <Input onChange={e => setPassword1( e.target.value )} type="password" placeholder="password" />
                    <Input onChange={e => setPassword2( e.target.value )} type="password" placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Stack spacing={2} direction="column" width={"100vw"} alignItems={'center'} >
                        <Button onClick={handleRegister} >CREATE</Button>
                        <Link to="/login">Already registerd? Login</Link>
                    </Stack>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default SignUp;