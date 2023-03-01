import { useState } from "react";
import styled from "styled-components";
import { mobile, tab } from "../responsive";
import { Link } from "react-router-dom";
import axios from "axios";
import base64 from "base-64";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;


const Login = () => {
  const [ username, setUsername ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const [ error, setError ] = useState( false );

  const handleClick = ( e ) => {
    e.preventDefault();
    const basic = base64.encode( `${username}:${password}` );
    const headers = {
      Authorization: `Basic ${basic}`,
    };
    axios.post( `${process.env.REACT_APP_API_URL}/login`, {},
      {
        headers: headers,
      } ).then( ( res ) => {
        setError( false );
        localStorage.setItem( 'token', res.data.token );
        localStorage.setItem( 'username', res.data.username );
        localStorage.setItem( 'id', res.data.id );
      } ).catch( ( err ) => {
        setError( true );
        console.log( err );
      }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {error && <span style={{ color: 'red', marginTop: '10px' }}>Invalid username or password</span>}
        <Form>
          <Input onChange={e => setUsername( e.target.value )} placeholder="username" />
          <Input onChange={e => setPassword( e.target.value )} type='password' placeholder="password" />
          <Button onClick={handleClick}>LOGIN</Button>
          <Link to="/signup">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;