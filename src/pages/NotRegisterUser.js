import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { Container } from '../styles/NotRegisterUser'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {/* activateAuth se obtiene del Context.js de la const value y se inyecta para activar el isAuth sin necesidad de usar las props */
      ({ activateAuth }) => {
        return (
          <>
            <Container>
              <UserForm onSubmit={activateAuth} title='Registrarse' />
              <UserForm onSubmit={activateAuth} title='Iniciar Sesión' />
            </Container>
          </>
        )
      }
    }
  </Context.Consumer>
)
