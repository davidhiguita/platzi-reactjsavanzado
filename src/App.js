// @vendors
import React from 'react'

// @components
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { GlobalStyle } from './GlobalStyles'

const App = () => (
  <div className='app'>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)

export default App
