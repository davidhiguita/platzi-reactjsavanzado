import styled from 'styled-components'
import { rotate } from '../../styles/animations'

export const Form = styled.form`
  /* border: solid 2px gray; */
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  margin: 20px;
  padding: 20px;
  position: relative;

  &[disabled] {
    &:after {
      ${rotate()};
      border: solid 3.5px #8d00ff;
      border-right-color: transparent;
      border-radius: 50%;
      content: '';
      height: 30px;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
    }
  }
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;

    &[disabled] {
    opacity: 0.3;
  }
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;

  &[disabled] {
    opacity: 0.3;
  }
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`
