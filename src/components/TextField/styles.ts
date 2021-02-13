import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
`

export const TextFieldContainer = styled.div`
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-bottom-color: #f9c74f;
  background-color: #1e212d;
  height: 30px;
  outline: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const Input = styled.input`
  color: #f9c74f;
  outline: none;
  background: transparent;
  border: 0px;
  padding: 16px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #f4f9f9;
  }
  :-ms-input-placeholder {
     color: #f4f9f9;
  }
`

export const Label = styled.p`
  font-size: 13px;
  color: #f9c74f;
`
