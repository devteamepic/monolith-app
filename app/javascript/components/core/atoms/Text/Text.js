import React, { useState } from 'react'
import TextStyled from '../../../styled/atoms/textStyled'

const Text = ({ size, children, ...props }) => {
    const [sizes] = useState({
        large: '32px',
        medium: '24px',
        small: '16px',
    })

    return (
        <TextStyled
          size = { sizes[size] }
        >
          { children }
        </TextStyled>
    )
}

export default Text
