import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

/* El $input que se le pasa a likeAnonymousPhoto será el id de la foto a la que se reaccionó */
const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
