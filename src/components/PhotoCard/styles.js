import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'
import { MdFavorite } from 'react-icons/md'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0px;
  overflow: hidden;
  padding: 56.25% 0 0 0; /* Esto es para empujar el contenido de la imágen hacia arriba */
  position: relative;
  width: 100%;
`

export const Article = styled.article`
  min-height: 200px;
  margin-bottom: 10px;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0,0,0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
export const LikeIcon = styled(MdFavorite)`
  color: #ff277a;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`
