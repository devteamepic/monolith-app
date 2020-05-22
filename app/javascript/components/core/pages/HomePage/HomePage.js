import React, { useState } from 'react'
import HomePageStyled from '../../../styled/pages/homePageStyled'
import colorScheme from '../../../../misc/colorScheme'
import List from '../../organisms/List/List'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import Icon from '../../atoms/Icon/Icon'
import Button from '../../atoms/Button/Button'

const HomePage = () => {
    const [homePageText] = useState([
        { component: 'text', size: 'medium', textValue: 'UNIFOUND will compare your diploma contents with our database. Its is not a plaguarism comparison! In fact it will try to match the most related article (by meaning) from our database with content of your diploma.' },
    ])

    const redirectTo = (url) => {
        window.location.href = url
    }

    return(
        <HomePageStyled>
          <div
            style = {{ backgroundColor: colorScheme.denim, position: 'relative' }}
          >
            <Icon
              additionalStyles = { 'position: absolute; top: 20%; left: 20%; text-align: center;' }
              icon = { 'logo' }
              heightParam = { '60%' }
              widthParam = { '60%' }
            />
          </div>
          <div
            style = {{ backgroundColor: colorScheme.steel }}
          >
            <TextViewer
              childrenData = { homePageText }
              additionalStyles = { 'margin-top: 15%;' }
            />
          </div>
          <div
            style = {{ gridRow: '1/3' }}
          >
            <List
              heightParameter = { '60%' }
              margin = { '20%' }
            >
              <li
                style = {{ width: '80%', marginLeft: '10%', marginBottom: '10%' }}
              >
                <Button
                  callback = { () => redirectTo('/profile') }
                >
                  Your Profile
                </Button>
              </li>
              <li
                style = {{ width: '80%', marginLeft: '10%', marginBottom: '10%' }}
              >
                <Button
                  callback = { () => redirectTo('/findUni') }
                >
                  Find me an university!
                </Button>
              </li>
              <li
                style = {{ width: '80%', marginLeft: '10%' }}
              >
                <Button
                  callback = { () => redirectTo('/aboutUs') }
                >
                  About us
                </Button>
              </li>
            </List>

          </div>
        </HomePageStyled>
    )
}

export default HomePage
