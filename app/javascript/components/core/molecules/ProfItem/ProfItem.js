import React, { useState } from 'react'
import ProfItemStyled from '../../../styled/molecules/profItemStyled'
import colorScheme from '../../../../misc/colorScheme'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'
import { connect } from 'react-redux'

const ProfItem = ({ fileObject, dispatch, ...props }) => {
    const [isUpsideDown, setIsUpsideDown] = useState(false)

    const handleClick = () => {
        setIsUpsideDown(!isUpsideDown)
    }

    return (
        <ProfItemStyled
          colorScheme = { colorScheme }
          shouldExpand = { isUpsideDown }
        >
          <Icon
            heightParam = '110px'
            widthParam = '110px'
            icon = 'person'
          />
          <div style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Text
              size = 'medium'
              isHeader = { true }
            >
              asdf
            </Text>
            <><br/><br/></>
            <Text
              size = 'medium'
              isHeader = { true }
            >
              asdf
            </Text>
          </div>
          <div
            style = {{ paddingTop: '35%' }}
          >
            <Text
              size = 'large'
            >
              100%
            </Text>
          </div>
          <button
            onClick = { handleClick }
            style = {{
              outline: 'none',
              border: 'none',
              background: 'none',
              width: '50px',
              height: '50px',
              margin: isUpsideDown ? '0 0 0 25px' : '25px  0 0 25px',
              padding: '0',
              transform: 'translateY(25%) translateX(-25%)',
              transition: '0.5s ease all'
            }}
          >
            <Icon
              degree = { isUpsideDown ? '180' : '0' }
              heightParam = '50px'
              widthParam = '50px'
              icon = 'v'
            />
          </button>
          { isUpsideDown &&
            <div style={{ gridColumn: '1/5', height: '200px', padding: '10px 10px 10px 0',  wordWrap: 'break-word', width: '100%' }}>
              <Text
                size = 'medium'
                isHeader = { true }
              >
                Email: dmarkitanov@gmail.com
              </Text>
              <><br/><br/></>
              <Text
                isHeader = { true }
                size = 'medium'
              >
                Related Article:
                Research Of Results Of Gold Atom Nucleus Collapse Inside The RHIC
              </Text>
            </div>
          }
        </ProfItemStyled>
    )
}

export default connect() (ProfItem)
