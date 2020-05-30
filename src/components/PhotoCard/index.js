import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import ReactPlaceholder from 'react-placeholder'
import { photoCardSkeleton } from '../Placeholder/photoCardSkeleton'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '../Category/styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ loading, id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false) /* liked es el equivalente a storedValue y setLiked equivale a setLocalStorage */

  return (
    <Article ref={element}>
      {
        show &&
          <ReactPlaceholder
            ready={!loading}
            showLoadingAnimation
            customPlaceholder={photoCardSkeleton}
          >
            <ImgWrapper>
              <Link to={`/detail/${id}`}>
                <Img src={src} />
              </Link>
            </ImgWrapper>

            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                    setLiked(!liked)
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToggleLikeMutation>
          </ReactPlaceholder>
      }
    </Article>
  )
}
