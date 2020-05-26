import React, { useState } from 'react'
import colorScheme from '../../../../misc/colorScheme'
import ListStyled from '../../../styled/organisms/listStyled'

/*
 * List component is not an organism due to the fact that it
 * contains <li /> items that are already organisms. However I've
 * come across the limit of hierarchy of Atomic Design Pattern.
 */
const List = ({ children, onScrollCallback, color, margin, heightParameter, ...props }) => {
  const [backgroundColor] = useState(colorScheme[color])
  const [marginTop] = useState(margin)
  const [height] = useState(heightParameter)

  return (
    <ListStyled
      backgroundColor = { backgroundColor }
      marginTop = { marginTop }
      height = { height }
      onScroll = { e => onScrollCallback(e) }
    >
      { children }
    </ListStyled>
  )
}

export default List
