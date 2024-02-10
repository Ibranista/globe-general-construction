import styled from 'styled-components'

type ListProps = {
  color?: string
  padding?: string | number
  onHover?: string
  ml?: string | number
}

const List = styled.li<ListProps>`
  color: ${({ color }) => color || '#000'};
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  padding: ${({ padding }) => padding || '10px'};
  margin-left: ${({ ml }) => ml || 'unset'};
  &:hover {
    background: ${({ onHover }) => onHover || 'unset'};
    cursor: pointer;
    color: #ae8507 !important;
    transition: all 0.3s ease-in-out;
  }
`

export default List
