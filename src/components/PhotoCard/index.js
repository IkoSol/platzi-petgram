import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import ReactPlaceholder from 'react-placeholder'
import { photoCardSkeleton } from '../Placeholder/photoCardSkeleton'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '../Category/styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ loading, id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

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
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
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
