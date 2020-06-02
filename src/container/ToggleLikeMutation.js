import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

/* El $input que se le pasa a likePhoto será el id de la foto a la que se reaccionó */
const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!){
    likePhoto(input: $input){
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
