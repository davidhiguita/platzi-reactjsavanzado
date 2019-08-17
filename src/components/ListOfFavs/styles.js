import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  margin: 1%;
  overflow: hidden;
  position: relative;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  height: calc(100vh - 210px);
  overflow-y: auto;
  padding: 20px 0;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
