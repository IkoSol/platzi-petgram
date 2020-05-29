import styled from 'styled-components'
import { MdFavorite } from 'react-icons/md'
import { fadeIn } from '../../styles/animation'

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
