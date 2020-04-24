import React, { useState, useEffect } from 'react'
import HomePageStyled from '../../../styled/pages/homePageStyled'
import colorScheme from '../../../../misc/colorScheme'
import Text from '../../atoms/Text/Text'
import Input from '../../atoms/Input/Input'
import DragAndDrop from '../../atoms/DragAndDrop/DragAndDrop'
import List from '../../organisms/List/List'
import FileItem from '../../molecules/FileItem/FileItem'
import ProfItem from '../../molecules/ProfItem/ProfItem'
import CheckboxMessage from '../../molecules/CheckboxMessage/CheckboxMessage'
import { concernTrigger } from '../../../../redux/actions/concernAction'
import { connect } from 'react-redux'
import { fileService } from '../../../../misc/services/fileService'

const HomePage = ({ concern, files, dispatch, ...props }) => {
  const [isConcerned, setIsConcerned] = useState(concern.isConcerned)
  const [fileArray, setFileArray] = useState(files)
  const [disabled, setDisabled] = useState(true)

//  useEffect(() => {
//    if (shouldFetch) {
//      fileService.fetchUserData(localStorage.getItem('userId'), localStorage.getItem('token'))
//                 .then(response => {
//                   var parsedFileArray = JSON.parse(response)
//                   setFileArray(parsedFileArray)
//                   dispatch(addFilesAction(fileArray))
//                   setShouldFetch(false)
//                 })
//                 .catch(error => {
//                   console.log(error)
//                   setShouldFetch(false)
//                 })
//    }
//  }, [shouldFetch, dispatch, fileArray])

  const handleSubmit = (e) => {
    e.preventDefault()

    fileArray.map(file => {
      console.log(file)
      fileService.send(file, localStorage.getItem('userId'), localStorage.getItem('token'))
                 .then(response => {
                   alert(response)
                   console.log(response)
                 })
                 .catch(error => {
                   console.log('asdf')
                   alert(error)
                   console.log(error)
                 })
      return null
    })

  }

  useEffect(() => {
    setIsConcerned(concern.isConcerned)
    setFileArray(files)
  }, [concern, files])

  useEffect(() => {
    setDisabled(!(fileArray.length !== 0 && isConcerned))
  }, [fileArray, isConcerned])

    return (
        <HomePageStyled
          colorScheme = { colorScheme }
        >
          <div>
            <div style={{ height: '80%', width: '80%', textAlign: 'center', margin: '10%'}}>
              <Text
                size = 'large'
              >
                Drop your files here
              </Text>
              <div style={{ height: '100px' }}/>
              <div style={{ height: '500px' }}>
                <DragAndDrop
                  height = '500px'
                />
              </div>
              <div style={{ marginTop: '10%' }}>
                <CheckboxMessage
                  textColor = 'watermelon'
                  callback = { concernTrigger }
                >
                  I give my concern to UNIFOUND to process my thesis
                </CheckboxMessage>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: colorScheme.denim, color: 'white' }}>
            <div style={{ height: '80%', width: '80%', margin: '10%' }}>
              <div style={{ textAlign: 'center' }}>
                <Text
                  size = 'large'
                >
                  Edit here
                </Text>
              </div>
              <List
                color = 'steel'
              >
                { fileArray.map(file => (
                    <FileItem
                      key = { file.id }
                      fileObject = { file }
                    />
                  )
                )}
              </List>
            </div>
          </div>
          <div style={{ backgroundColor: colorScheme.steel }}>
            <div style={{ height: '90%', width: '80%', margin: '5% 10% 0 10%' }}>
              <div
                style = {{ textAlign: 'center', height: '100px' }}
              >
                <form
                  style={{ width: '100%', height: '100%' }}
                  onSubmit = { e => handleSubmit(e) }
                >
                  <Input
                    type = { 'submit' }
                    height = '100%'
                    disabled = { disabled }
                    text = 'Submit'
                  />
                </form>
              </div>
              <List
                color = 'denim'
                margin = 'calc(5% - 5px)'
              >
                <ProfItem/>
                <ProfItem/>
                <ProfItem/>
                <ProfItem/>
                <ProfItem/>
                <ProfItem/>
              </List>
            </div>
          </div>
        </HomePageStyled>
    )
}

const mapStateToProps = (state) => {
  return {
    concern: state.concern,
    files: state.files
  }
}

export default connect(mapStateToProps) (HomePage)
