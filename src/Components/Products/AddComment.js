import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, tab } from "../responsive";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";


const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile( { width: "75%" } )}
  ${tab( { width: "50%" } )}
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

function AddComment ( { itemId, handleRefresh } ) {
    const [ comment, setComment ] = useState( "" );
    const addComment = async ( e ) => {
        e.preventDefault();
        try {
            const res = await axios.post( `${process.env.REACT_APP_API_URL}/comment`, {
                comment: comment,
                itemID: itemId,
                ownerID: localStorage.getItem( "id" )
            }, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem( "token" )
                }
            } );
            console.log( res.data );
            window.location.reload();
        } catch ( err ) {
            console.log( err );
        }
    };
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Input onChange={e => setComment( e.target.value )} placeholder='Add your comment' />
                    <Stack paddingTop={'10px'} direction="column" width={"100vw"} alignItems={'center'} >
                        <Button onClick={addComment} >Add your comment</Button>
                    </Stack>
                </Form>
            </Wrapper>
        </Container >
    );
}

export default AddComment;