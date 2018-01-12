import React from 'react'
import styled from 'styled-components'

import {
  Button,
  Card,
  CardActions,
  CardSupportingText,
  CardTitle,
  CardTitleText,
  shadow2dp,
} from 'styled-mdl'

const DemoCardSquare = Card.extend`
  ${shadow2dp()} 
  width: 320px;
  height: 320px;
`

const DemoCardTitle = CardTitle.extend`
  color: #fff;
  height: 176px;
  background: url("https://getmdl.io/assets/demos/dog.png") bottom right 15%
    no-repeat #46b6ac;
`

const caption = 'Square Card'

const demo = () => (
  <DemoCardSquare>
    <DemoCardTitle expand>
      <CardTitleText>Update</CardTitleText>
    </DemoCardTitle>
    <CardSupportingText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
    </CardSupportingText>
    <CardActions border>
      <Button colored>View Updates</Button>
    </CardActions>
  </DemoCardSquare>
)

const code = `
const DemoCardSquare = Card.extend\`
  \${shadow2dp()}
  width: 320px;
  height: 320px;
\`;

const DemoCardTitle = CardTitle.extend\`
  color: #fff;
  height: 176px;
  background: url('https://getmdl.io/assets/demos/dog.png') bottom right 15% no-repeat #46B6AC;
\`;

// Somewhere in a render
<DemoCardSquare>
  <DemoCardTitle expand>
    <CardTitleText>Update</CardTitleText>
  </DemoCardTitle>
  <CardSupportingText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
  </CardSupportingText>
  <CardActions border>
    <Button colored>ViewUpdates</Button>
  </CardActions>
</DemoCardSquare>`

export default { caption, demo, code }
