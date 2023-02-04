import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

let initialState = { num: "" };

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { num: +state.num + action.payload };

    case "minus":
      return { num: +state.num - action.payload };

    case "multiplication":
      return { num: +state.num * action.payload };

    case "!division":
      return { num: +state.num / action.payload };
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState("");

  const inputHandler = (e) => {
    setNumber(e.target.value);
  };

  const plusHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "plus",
      payload: +number,
    });
    setNumber("")

  };

  const minusHandler = () => {
    dispatch({
      type: "minus",
      payload: +number,
    });
    setNumber("")

  };
  const multiplicationHandler = () => {
    dispatch({
      type: "multiplication",
      payload: +number,
    });
    setNumber("")

  };
  const divisionHandler = () => {
    dispatch({
      type: "!division",
      payload: +number,
    });
    setNumber("")

  };
  return (
    <Container>
      <Input type="number" value={number} onChange={inputHandler} />
      <H1>{state.num}</H1>
      <ButtonsStyled>
    
        <Button onClick={plusHandler}>➕</Button>
        <Button onClick={minusHandler}>➖</Button>
        <Button onClick={divisionHandler}>➗</Button>
        <Button onClick={multiplicationHandler}>✖️</Button>
      </ButtonsStyled>
    </Container>
  );
};

export default Form;

const Input = styled.input`
  padding: 20px;
  width: 250px;
  outline: none;
  border: none;
  border-radius: 30px;
  text-align: center;
  margin-top: 3rem;
  margin-left: 3.5rem;
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30rem;


`;

const ButtonsStyled = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 4rem;
`;

const H1 = styled.h1`
  margin: 2rem 0 0 10rem;
`;
