import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo' /* Query es un componente especial que nos permetirá usar la técnica de render props */
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

const query = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => (
  <Query query={query}>
    {
      ({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return 'Error to fetch data.'
        console.log('Data of listOfPhotoCards: ', data)
        return <ListOfPhotoCardsComponent {...data} />
      }
    }
  </Query>
)
