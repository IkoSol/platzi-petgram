import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { Container } from '../styles/NotRegisterUser'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context) /* activateAuth se obtiene del Context.js de la const value y se inyecta para activar el isAuth sin necesidad de usar las props */

  return (
    <>
      <Container>
        <RegisterMutation>
          {
            (register, { loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables }).then(({ data }) => {
                  const { signup } = data
                  activateAuth(signup)
                })
              }

              const errorMsg = error && 'User already registered'

              return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Register' />
            }
          }
        </RegisterMutation>

        <LoginMutation>
          {
            (login, { error, loading }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                login({ variables }).then(({ data }) => {
                  const { login } = data
                  activateAuth(login)
                })
              }

              const errorMsg = error && 'Wrong password or user does not exist'

              return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Login' />
            }
          }
        </LoginMutation>

      </Container>
    </>
  )
}
