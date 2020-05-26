import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #E6E6E6;
  ${props => props.fixed && css` /* Si el styled List tiene la prop fixed entonces e ejecuta este nuevo style */
    {
      ${fadeIn()}
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(.5);
      z-index: 1;
    }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
