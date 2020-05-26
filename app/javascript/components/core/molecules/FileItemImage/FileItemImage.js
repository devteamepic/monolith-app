import React, { useState } from 'react'
import FileItemImageStyled from '../../../styled/molecules/fileItemImageStyled'
import Text from '../../atoms/Text/Text'

const FileItemImage = ({ text, image, ...props }) => {
  const [caption] = useState(text)
  const [imageUrl] = useState('https://unifound.me' + image)

  return (
   <FileItemImageStyled>
     <img
       src = { imageUrl }
       alt = { caption }
     />
     <div
       style = {{
         width: '200px',
         margin: 'auto',
         backgroundColor: 'white',
         border: '1px solid black',
         height: '50px',
         lineHeight: '50px',
         color: 'black',
       }}
     >
       <Text
         size = { 'small' }
         shouldAnimate = { true }
         isHeader = { true }
       >
         { caption }
       </Text>
     </div>
   </FileItemImageStyled>
  )
}

export default FileItemImage
