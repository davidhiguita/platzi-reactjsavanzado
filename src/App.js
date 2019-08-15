// @vendors
import React, { createContext } from 'react'
import { Router } from '@reach/router'

// @components
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'
import { AppWrapper, RouterWrapper } from './styles'

import Context from './context/UserAuthContext'

export const UserAuthContext = createContext(false)

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Logo />
      <RouterWrapper>
        <Router>
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
        </Router>

        <Context.Consumer>
          {
            ({ isAuth }) =>
              isAuth
                ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
                : <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
          }
        </Context.Consumer>
      </RouterWrapper>
      <Navbar />
    </AppWrapper>
  )
}

export default App
