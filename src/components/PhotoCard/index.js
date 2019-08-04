import React, { Fragment, useEffect, useRef, useState } from 'react'

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

import { useLocalStorage } from '../../hooks/useLocalStorage'

import { Article, Button, Img, ImgWrapper } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({
  id,
  likes = 0,
  src = DEFAULT_IMAGE
}) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    )
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })

        observer.observe(element.current)
      })
  }, [element])

  const Icon = liked
    ? MdFavorite
    : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && (
          <Fragment>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLiked(!liked)}>
              <Icon size='24px' /> {likes} likes!
            </Button>
          </Fragment>
        )
      }
    </Article>
  )
}
