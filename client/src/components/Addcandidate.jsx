import axios from "../axios";
import React, { useState } from "react";
import FileBase64 from 'react-file-base64';
import styled from "styled-components";
function Addcandidate() {


  const [data, setData] = useState({ candidate_name: "", party_name: "",  imageURL:"" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "imageURL") {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setData({ ...data, [event.target.name]: reader.result });
      };
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/addcandidate";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("access_token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  

  return (
    <Container>
      <Logo>
        <img src="./amazon_logo.png" alt="" />
      </Logo>

      <FormContainer >
        <h3>Add Candidate</h3>

        <InputContainer>
          <p>candidate_name</p>
          <input
            name="candidate_name"
            onChange={handleChange}
            value={data.candidate_name}
          />

        </InputContainer>
        
        <InputContainer>
          <p>party_name</p>
          <input
            name="party_name"
            onChange={handleChange}
            value={data.party_name}
          />
        </InputContainer>

        <InputContainer>
          <p>ImageURL</p>
             <FileBase64
             type="file"
             multiple={false}
             onChange={handleChange}
             value={data.imageURL}
           />
          
        </InputContainer>
      

        <Button onClick={handleSubmit}>Add Candidate</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
    width: 40%;
    min-width: 450px;
    height: fit-content;
    padding: 15px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const Logo = styled.div`
    width: 120px;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  `;

const FormContainer = styled.form`
    border: 1px solid lightgray;
    width: 55%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
  
    h3 {
      font-size: 28px;
      font-weight: 400;
      line-height: 33px;
      align-self: flex-start;
  
      margin-bottom: 10px;
    }
  `;

const InputContainer = styled.div`
    width: 100%;
    padding: 10px;
  
    p {
      font-size: 14px;
      font-weight: 600;
    }
  
    input {
      width: 95%;
      height: 33px;
      padding-left: 5px;
      border-radius: 5px;
      border: 1px solid lightgray;
      margin-top: 5px;
  
      &:hover {
        border: 1px solid orange;
      }
    }
  `;

const Button = styled.button`
    width: 70%;
    height: 35px;
    background-color: #f3b414;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 30px;
  `;

export default Addcandidate;