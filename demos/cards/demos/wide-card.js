import React from 'react'
import styled from 'styled-components'
import { MdShare } from 'react-icons/lib/md'

import {
  Button,
  Card,
  CardActions,
  CardMenu,
  CardSupportingText,
  CardTitle,
  CardTitleText,
  shadow2dp,
} from 'styled-mdl'

const DemoCardWide = Card.extend`
  ${shadow2dp()} 
  width: 512px;
`

const DemoCardTitle = CardTitle.extend`
  color: #fff;
  height: 176px;
  background: url("https://getmdl.io/assets/demos/welcome_card.jpg") center /
    cover;
`

const DemoCardMenu = CardMenu.extend`
  color: #fff;
`

const caption = 'Wide Card'

const demo = () => (
  <DemoCardWide>
    <DemoCardTitle>
      <CardTitleText>Welcome</CardTitleText>
    </DemoCardTitle>
    <CardSupportingText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis
      pellentesque lacus eleifend lacinia...
    </CardSupportingText>
    <CardActions border>
      <Button colored>Get Started</Button>
    </CardActions>
    <DemoCardMenu>
      <Button icon>
        <MdShare />
      </Button>
    </DemoCardMenu>
  </DemoCardWide>
)

const code = `/*----- Wide Card -----*/

const DemoCardWide = Card.extend\`
  \${shadow2dp()}
  width: 512px;
\`;

const DemoCardTitle = CardTitle.extend\`
  color: #fff;
  height: 176px;
  background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;
\`;

const DemoCardMenu = CardMenu.extend\`
  color: #fff;
\`;

// Somewhere in a render
<DemoCardWide>
  <DemoCardTitle>
    <CardTitleText>
      Welcome
    </CardTitleText>
  </DemoCardTitle>
  <CardSupportingText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </CardSupportingText>
  <CardActions border>
    <Button colored>
      Get Started
    </Button>
  </CardActions>
  <DemoCardMenu>
    <Button icon>
      <MdShare />
    </Button>
  </DemoCardMenu>
</DemoCardWide>`

export default { caption, demo, code }
