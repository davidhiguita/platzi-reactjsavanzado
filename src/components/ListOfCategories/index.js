// @vendors
import React, { Fragment, useEffect, useState } from 'react'

// @components
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
      })
  }, [])

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
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(
          category =>
            <Item key={`category-item-${category.id}`}><Category {...category} /></Item>
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
