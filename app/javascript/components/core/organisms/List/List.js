import React, { useState } from 'react'
import colorScheme from '../../../../misc/colorScheme'
import ListStyled from '../../../styled/organisms/listStyled'

const List = ({ children, color, margin, ...props }) => {
    const [backgroundColor] = useState(colorScheme[color])
  const [marginTop] = useState(margin)

    return (
        <ListStyled
          backgroundColor = { backgroundColor }
          marginTop = { marginTop }
        >
          { children }
        </ListStyled>
    )
}

export default List
