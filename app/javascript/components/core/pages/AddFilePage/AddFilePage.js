import React, { useState, useEffect } from 'react'
import AddFilePageStyled from '../../../styled/pages/addFilePageStyled'
import colorScheme from '../../../../misc/colorScheme'
import Text from '../../atoms/Text/Text'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import Input from '../../atoms/Input/Input'
import DragAndDrop from '../../atoms/DragAndDrop/DragAndDrop'
import List from '../../organisms/List/List'
import FileItem from '../../organisms/FileItem/FileItem'
import ProfItem from '../../organisms/ProfItem/ProfItem'
import TextArea from '../../atoms/TextArea/TextArea'
import CheckboxMessage from '../../molecules/CheckboxMessage/CheckboxMessage'
import { concernTrigger } from '../../../../redux/actions/concernAction'
import { connect } from 'react-redux'
import { fileService } from '../../../../misc/services/fileService'

const HomePage = ({ concern, files, dispatch, ...props }) => {
  const [isConcerned, setIsConcerned] = useState(concern.isConcerned)
  const [fileArray, setFileArray] = useState(files)
  const [fileIdArray, setFileIdArray] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [abstractValue, setAbstractValue] = useState('')
  const [submissionStatus, setSubmissionStatus] = useState('Not Submitted')

  /**
   * Handles submition of form and sends files to backend.
   * @param { Object } e Event.
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmissionStatus('Waiting for a response')

    fileArray.map(file => {
      fileService.sendFile(file, localStorage.getItem('userId'), localStorage.getItem('token'))
        .then(response => {
          var bufferArr = fileIdArray
          bufferArr.push(JSON.parse(response).id)
          setFileIdArray(bufferArr)
          if (fileIdArray.length === fileArray.length) {
            fileService.sendSubmission(abstractValue, fileIdArray, localStorage.getItem('userId'), localStorage.getItem('token'))
              .then(response => {
                console.log(JSON.parse(response))
                setSubmissionStatus(JSON.parse(response).status.name)
              })
              .catch(error => {
                console.log(error)
              })
          }
        })
        .catch(error => {
          alert(error)
          console.log(error)
        })
      return null
    })
  }

  /**
   * useEffect that handles the file upload.
   * It also changes the concern. This useEffect was made to
   * handle both of the changes (one useEffect is better than 2)
   */
  useEffect(() => {
    setIsConcerned(concern.isConcerned)
    setFileArray(files)
  }, [concern, files])

  useEffect(() => {
    setDisabled(!(fileArray.length !== 0 && isConcerned && abstractValue !== ''))
  }, [fileArray, isConcerned, abstractValue])

  return (
    <AddFilePageStyled>
      <div style={{ height: '80%', width: '80%', textAlign: 'center', margin: '10%' }}>
        <Text
          size = 'large'
        >
          Write small abstract here.
        </Text>
        <div style={{ height: '50px' }}/>
        <TextArea
          width = { '100%' }
          height = { '200px' }
          callback = { value => setAbstractValue(value) }
        />
        <div style={{ height: '50px' }}/>
        <Text
          size = 'large'
        >
          Drop your files here or click it.
        </Text>
        <div style={{ height: '50px' }}/>
        <div style={{ height: '250px' }}>
          <DragAndDrop
            height = '250px'
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
                key = { file.size }
                fileObject = { file }
              />
            ))}
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
          <TextViewer
            childrenData = {[
              { component: 'text', size: 'large', textValue: 'Submission status:', isHeader: true },
              { component: 'text', size: 'large', textValue: submissionStatus },
              {  },
              {  },
              { component: 'text', size: 'medium', textValue: 'This is the status of current submisison, it will change as soon as you submit or recieve a response.' },
              {  },
              {  },
              { component: 'text', size: 'medium', textValue: 'You may view your submissions ' },
              { component: 'link', link: '/profile', textValue: 'here.' },
            ]}
          />
        </div>
      </div>
    </AddFilePageStyled>
  )
}

const mapStateToProps = (state) => {
  return {
    concern: state.concern,
    files: state.files
  }
}

export default connect(mapStateToProps) (HomePage)
