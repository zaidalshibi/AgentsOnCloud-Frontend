import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { mobile, tab } from "../responsive";
import { Stack } from "@mui/material";

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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;



function AddProduct () {
    const [ name, setName ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ price, setPrice ] = useState( "" );
    const [ image, setImage ] = useState( "" );

    const handleAddProduct = ( e ) => {
        e.preventDefault();
        const product = {
            name,
            description,
            price,
            image,
            ownerID: parseInt( localStorage.getItem( "id" ) ),
        };
        const token = localStorage.getItem( "token" );
        axios.post( `${process.env.REACT_APP_API_URL}/item`, product, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        } )
            .then( ( res ) => {
                console.log( res );
            } )
            .catch( ( err ) => {
                console.log( err );
            } );
    };

    return (
        <Container>
            <Wrapper>
                <Title>Add New Product</Title>
                <Form>
                    <Input onChange={e => setName( e.target.value )} placeholder="Product Name"  required={true}/>
                    <Input onChange={e => setDescription( e.target.value )} placeholder="Product Description" />
                    <Input onChange={e => setPrice( e.target.value )} placeholder="Product Price" />
                    <Input onChange={e => setImage( e.target.value )} placeholder="Image URL" />
                    <Stack paddingTop={'10px'} direction="column" width={"100vw"} alignItems={'center'} >
                        <Button onClick={handleAddProduct} >Add Product</Button>
                    </Stack>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default AddProduct;