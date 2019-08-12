// @vendors
import React, { Fragment, useEffect, useState } from 'react'

// @components
import { Category } from '../Category'
import { Item, List, Spinner } from './styles'

function useCategoryData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoryData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Spinner />
          : categories.map(
            category =>
              <Item key={`category-item-${category.id}`}><Category {...category} path={`/pet/${category.id}`} /></Item>
          )
      }
    </List>
  )

  return (
    <Fragment>
      {renderList(showFixed)}
    </Fragment>
  )
}
