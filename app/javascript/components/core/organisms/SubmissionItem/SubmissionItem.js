import React, { useState, useEffect } from 'react'
import SubmissionItemStyled from '../../../styled/organisms/submissionItemStyled'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import List from '../List/List'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'
import TextArea from '../../atoms/TextArea/TextArea'
import FileItemImage from '../../molecules/FileItemImage/FileItemImage'
import ProfItem from '../ProfItem/ProfItem'
import colorScheme from '../../../../misc/colorScheme'
import { fileService } from '../../../../misc/services/fileService'

const SubmissionItem = ({ number, abstract, documents, id, ...props }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fileService.getSubmission(localStorage.getItem('userId'), localStorage.getItem('token'), id)
               .then(response => {
                 console.log(response)
                 setData(JSON.parse(response))
               })
               .catch(error => {
                 console.log(error)
               })
  }, [])

  const ordinalSuffix = (i) => {
    var j = i % 10,
        k = i % 100
    if (j === 1 && k !== 11) {
      return i + "st"
    }
    if (j === 2 && k !== 12) {
      return i + "nd"
    }
    if (j === 3 && k !== 13) {
      return i + "rd"
    }
    return i + "th"
  }

  const [isUpsideDown, setIsUpsideDown] = useState(false)
  const [documentArray] = useState(documents)
  const [header] = useState([
    { component: 'text', size: 'large', textValue: ordinalSuffix(number + 1) + ' submission details' },
  ])
  const [text] = useState([
    { component: 'text', size: 'small', textValue: 'Submitted on 27.05.2020' },
  ])
  const [profId] = useState(id)

  const handleClick = () => {
    setIsUpsideDown(!isUpsideDown)
  }

  return (
    <SubmissionItemStyled
      shouldExpand = { isUpsideDown }
    >
      <TextViewer
        childrenData = { header }
        notDescription = { true }
        additionalStyles = { 'color: ' + colorScheme.marigold + '; text-align: left;' }
      />
      <TextViewer
        childrenData = { text }
        notDescription = { true }
        additionalStyles = { 'text-align: left;' }
      />
      <button
        onClick = { handleClick }
        style = {{
            outline: 'none',
            border: 'none',
            background: 'none',
            width: '50px',
            height: isUpsideDown && '50px',
            padding: '0',
            transition: '0.5s ease all',
            gridRow: '1/3',
        }}
      >
        <Icon
          degree = { isUpsideDown ? '180' : '0' }
          widthParam = '50px'
          icon = 'v'
        />
      </button>
      { isUpsideDown &&
        <div
          style = {{
              gridColumn: '1/3',
              width: '100%',
              height: '500px',
              gridRow: '3/-1',
              display: 'grid',
              gridTemplateColumns: '40% 60%',
              gridTemplateRows: '40% 60%',
              padding: '0 10px 10px 0',
          }}
        >
          <div
            style = {{ width: '100%', height: '100%', color: 'white', gridRow: '1/3', boxSizing: 'border-box', padding: '0 10px 30px 10px' }}
          >
            <Text
              size = { 'medium' }
            >
              Submitted Files:
            </Text>
            <List
              color = 'denim'
              margin = 'none;'
              heightParameter = '100%'
            >
              { documentArray.map((item, index) => (
                <FileItemImage
                  text = { item.name }
                  image = { item.file_preview}
                />
              )) }
            </List>
          </div>
          <div
            style = {{ height: '100%', color: 'white', padding: '0 10px 10px 10px', boxSizing: 'border-box' }}
          >
            <Text
              size = { 'medium' }
            >
              Abstract:
            </Text>
            <TextArea
              height = '95%'
              width = '100%'
              shouldDisable = { true }
              value = { abstract }
            />
          </div>
          <div
            style = {{ padding: '10px 10px 30px 10px', color: 'white', height: '100%', boxSizing: 'border-box' }}
          >
            <Text
              size = { 'medium' }
            >
              Results:
            </Text>
            <List
              color = 'denim'
              margin = 'none;'
              heightParameter = '100%'
              onScrollCallback = { e => console.log('asdf') }
            >
        { data.map((item, index) => {
          return (
            <ProfItem
              profData = {item}
            />
          )
        }) }
            </List>
          </div>
      </div>
      }
    </SubmissionItemStyled>
  )
}

export default SubmissionItem
