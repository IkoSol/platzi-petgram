import React from 'react'
import { PhotoCardWithQuery } from '../container/photoCardWithQuery'
import { Layout } from '../components/Layout'

export default ({ detailId }) => (
  <Layout title={`Photo ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
