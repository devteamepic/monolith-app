import React, { useState } from 'react'
import SubmissionItem from '../organisms/SubmissionItem/SubmissionItem'
import List from '../organisms/List/List'

const Test = () => {
  const [testArr] = useState([
    'a', 'b', 'c'
  ])


    return (
        <div style = {{ width: '55%', height: '100%' }}>
          <List
            color = { 'marigold' }
          >
            { testArr.map(item => {
              return (
                <SubmissionItem
                  key = { item }
                  number = { testArr.indexOf(item) }
                />
              )
            } )}
          </List>
        </div>
    )
}

export default Test
