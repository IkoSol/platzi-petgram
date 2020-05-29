import React from 'react'
import { Query } from 'react-apollo' /* Query es un componente especial que nos permetirá usar la técnica de render props */
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { GET_PHOTOS } from '../renderProps'
import { PhotoCard } from '../components/PhotoCard'

const renderProps = ({ loading, error, data }) => {
  if (loading) return <PhotoCard loading={loading} />
  if (error) return 'Error to fetch data.'
  return <ListOfPhotoCardsComponent {...data} />
}

export const ListOfPhotoCards = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    {renderProps}
  </Query>
)
