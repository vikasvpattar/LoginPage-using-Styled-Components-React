import LeftImg from "../images/LeftImage.jpg";
import EyeSlash from "../images/EyeSlash.jpg";

import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 40px;
  flex-wrap: wrap;
  @media (max-width: 414px) {
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  padding: 20px;
  flex-basis: 40%;

  display: flex;
  align-items: center;
  @media (max-width: 414px) {
    flex-basis: 80%;
    padding: 5px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const FormContainer = styled.div`
  flex: 1;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 20px;

  background-color: #fff;

  h2 {
    text-align: center;
    color: #04072f;
  }
  @media (max-width: 414px) {
    padding: 5px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const InputLabel = styled.label`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-bottom: 5px;
  color: #04072f;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

const CheckboxLabel = styled.label`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  margin-left: 5px;
  padding: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #1575a7;
  color: #fff;
  border: none;
  width: 300px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  text-align: center;
  text-decoration: none;
  color: #f78719;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const PasswordContainer = styled.div`
  position: relative;
`;
const PasswordImg = styled.div`
  position: absolute;
  top: 20%;
  right: 4%;
  Image {
    width: 24px;
    height: 24px;
  }
`;

const ChangePass = styled.div`
  float: right;
  margin-top: 10px;
`;

const Text = styled.p`
  color: #04072f;
  text-align: center;
`;

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <Image src={LeftImg} alt="Login" />
      </ImageContainer>
      <FormContainer>
        <h2>Login</h2>
        <FormGroup>
          <InputLabel htmlFor="username">Login Id</InputLabel>
          <InputField type="text" id="username" placeholder="Enter LoginId" />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="password">Password</InputLabel>
          <PasswordContainer>
            <InputField
              className="passwordInp"
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter password"
            />
            <PasswordImg>
              <Image src={EyeSlash} onClick={handlePasswordVisibility} />
            </PasswordImg>
            <ChangePass>
              <Link>Change Password</Link>
            </ChangePass>
          </PasswordContainer>
        </FormGroup>
        <CheckboxLabel>
          <Checkbox type="checkbox" id="rememberMe" />
          Remember Me
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox" id="agreeToTerms" />
          Agree to Terms and Conditions
        </CheckboxLabel>
        <ButtonContainer>
          <LoginButton disabled={false}>Login</LoginButton>
        </ButtonContainer>
        <Text>
          Don't have an account? <Link href="/register">Register here</Link>
        </Text>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
