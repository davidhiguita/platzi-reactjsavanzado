import styled from 'styled-components'

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`

export const Tab = styled.div`
  background-color: lightgray;
  border: solid 1px gray;
  border-radius: 3px;
  color: black;
  cursor: pointer;
  margin: auto 5px;
  padding: 5px;

  &.active {
    background-color: #8d00ff;
    color: white;
  }
`
