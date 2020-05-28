import React from 'react'
import { ImgWrapper, Article, Img, Button, LikeIcon } from './styles'
import ReactPlaceholder from 'react-placeholder'
import { photoCardSkeleton } from '../Placeholder/photoCardSkeleton'
import { MdFavoriteBorder } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ loading, id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false) /* liked es el equivalente a storedValue y setLiked equivale a setLocalStorage */

  const Icon = liked ? LikeIcon : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show &&
          <ReactPlaceholder
            ready={!loading}
            showLoadingAnimation
            customPlaceholder={photoCardSkeleton}
          >
            <>
              <a href={`/?detail=${id}`}>
                <ImgWrapper>
                  <Img src={src} />
                </ImgWrapper>
              </a>

              <Button onClick={() => setLiked(!liked)}>
                <Icon size='32px' /> {likes} likes!
              </Button>
            </>
          </ReactPlaceholder>
      }
    </Article>
  )
}
