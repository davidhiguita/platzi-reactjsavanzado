// @vendors
import React, { Fragment } from 'react'

// @components
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { PhotoCardDetail } from './container/PhotoCardDetail'
import { Logo } from './components/Logo'
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
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </Fragment>
      }
    </div>
  )
}

export default App
