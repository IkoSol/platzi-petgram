import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost' /* Nos va a permitir hacer queries como si fueran strings y Apollo lo va a entender */

/* La query que vamos a usar es para recuperar las fotos. Este patrón se llama componente de orden superior ya que es una función que
   ele pasa como parametro un componente y se le devuelve otro componente con mejoras o con props inyectadas */
export const withPhotos = graphql(gql`
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
`)
