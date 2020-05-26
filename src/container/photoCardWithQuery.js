import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo' /* Query es un componente especial que nos permetirá usar la técnica de render props */

const query = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        if (loading) return 'loading...'
        if (error) return 'Error to fetch data'
        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
