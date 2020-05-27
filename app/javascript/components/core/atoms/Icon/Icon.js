import React, { useState, useEffect } from 'react'
import IconStyled from '../../../styled/atoms/iconStyled'
import cross from '../../../../misc/images/cross.png'
import v from '../../../../misc/images/v.png'
import fileIcon from '../../../../misc/images/fileIcon.png'
import profIcon from '../../../../misc/images/profIcon.png'
import logo from '../../../../misc/images/logo.png'

const Icon = ({ icon, heightParam, widthParam, degree, additionalStyles, callback, ...props }) => {
  const [styles] = useState(additionalStyles)
  const [height] = useState(heightParam)
  const [width] = useState(widthParam)
  const [rotateDegree, setRotateDegree] = useState(degree)
  const [icons] = useState({
    cross: cross,
    v: v,
    file: fileIcon,
    person: profIcon,
    logo: logo
  })

  useEffect(() => {
    setRotateDegree(degree)
  }, [degree])

  return(
    <IconStyled
      styles = { styles }
      rotateDegree = { rotateDegree }
      height = { height }
      width = { width }
    >
      <img
        src={ icons[icon] }
        alt={ icon }
        style = {{ maxHeight: '100%', maxWidth: '100%' }}
        onClick = { callback }
      />
    </IconStyled>
  )
}

export default Icon
