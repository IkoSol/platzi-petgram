import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from 'react-apollo' /* Query es un componente especial que nos permetirá usar la técnica de render props */
import { GET_SINGLE_PHOTO } from '../renderProps'

const renderProps = ({ loading, error, data }) => {
  if (loading || !data) return <PhotoCard loading={loading} />
  if (error) return <p>Error to fetch data.</p>
  const { photo = {} } = data
  return <PhotoCard loading={loading} {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProps}
  </Query>
)
