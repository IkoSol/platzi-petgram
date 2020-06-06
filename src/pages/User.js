import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='User Managment'>
      <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
    </Layout>
  )
}
