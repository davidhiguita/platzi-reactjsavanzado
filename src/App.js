// @vendors
import React from 'react'
import { Router } from '@reach/router'

// @components
import { PhotoCardDetail } from './container/PhotoCardDetail'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div className='app'>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardDetail id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
          </Router>
      }
    </div>
  )
}

export default App
