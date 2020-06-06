import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Your Favorites' subtitle='Here you can find your favorites photos'>
    <FavsWithQuery />
  </Layout>
)
