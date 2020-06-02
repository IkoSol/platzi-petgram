import React from 'react'
import Context from '../Context'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {/* activateAuth se obtiene del Context.js de la const value y se inyecta para activar el isAuth sin necesidad de usar las props */
      ({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesión</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
