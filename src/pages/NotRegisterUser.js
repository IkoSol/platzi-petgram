import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { Container } from '../styles/NotRegisterUser'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {/* activateAuth se obtiene del Context.js de la const value y se inyecta para activar el isAuth sin necesidad de usar las props */
      ({ activateAuth }) => {
        return (
          <>
            <Container>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'User already registered'

                    return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
                  }
                }
              </RegisterMutation>
              <UserForm onSubmit={activateAuth} title='Iniciar Sesión' />
            </Container>
          </>
        )
      }
    }
  </Context.Consumer>
)
