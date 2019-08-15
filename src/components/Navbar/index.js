import React from 'react'
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md'

import { Link, Nav } from './styles'

const SIZE = '32px'

export const Navbar = () => (
  <Nav>
    <Link to='/'><MdHome size={SIZE} /></Link>
    <Link to='/favs'><MdFavorite size={SIZE} /></Link>
    <Link to='/user'><MdPerson size={SIZE} /></Link>
  </Nav>
)
