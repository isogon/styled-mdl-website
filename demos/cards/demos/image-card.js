import React from 'react'
import styled from 'styled-components'

import { Card, CardActions, CardTitle, shadow2dp } from 'styled-mdl'

const ImageCard = Card.extend`
  ${shadow2dp()} width: 256px;
  height: 256px;
  background: url("https://getmdl.io/assets/demos/image_card.jpg") center /
    cover;
`

const Footer = CardActions.extend`
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
`

const Filename = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`

const caption = 'Image Card'

const demo = () => (
  <ImageCard>
    <CardTitle expand />
    <Footer>
      <Filename>Image.jpg</Filename>
    </Footer>
  </ImageCard>
)

const code = `
const ImageCard = Card.extend\`
  \${shadow2dp()}
  width: 256px;
  height: 256px;
  background: url('https://getmdl.io/assets/demos/image_card.jpg') center / cover;
\`;

const Footer = CardActions.extend\`
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
\`;

const Filename = styled.span\`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
\`;

// Somewhere in a render
<ImageCard>
  <CardTitle expand />
  <Footer>
    <Filename>Image.jpg</Filename>
  </Footer>
</ImageCard>`

export default { caption, demo, code }
