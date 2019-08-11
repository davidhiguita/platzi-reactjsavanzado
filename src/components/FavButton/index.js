import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({
  liked,
  likes,
  setLiked
}) => {
  const Icon = liked
    ? MdFavorite
    : MdFavoriteBorder

  return (
    <Button onClick={setLiked}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
