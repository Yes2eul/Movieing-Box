"use client";

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const SelectStyled = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;

export const OptionStyled = styled.option`
  padding: 10px;
  font-size: 16px;
`;

export const ButtonStyled = styled.button`
  padding: 10px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
