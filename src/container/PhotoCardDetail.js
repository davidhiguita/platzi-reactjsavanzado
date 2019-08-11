import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
  query getPhoto($id:ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ data: { photo = {} }, error, loading }) => {
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error! ...</p>
  return <PhotoCard {...photo} />
}

export const PhotoCardDetail = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
