import { mapProps } from 'recompose'
import React from 'react'
import dynamic from 'next/dynamic'

import DemoLayout from '../../components/DemoLayout'
import loading from '../../components/Loading'

const demos = {
  badges: dynamic(import('../../demos/badges'), { loading }),
  buttons: dynamic(import('../../demos/buttons'), { loading }),
  cards: dynamic(import('../../demos/cards'), { loading }),
  chips: dynamic(import('../../demos/chips'), { loading }),
  dialogs: dynamic(import('../../demos/dialogs'), { loading }),
  lists: dynamic(import('../../demos/lists'), { loading }),
  loading: dynamic(import('../../demos/loading'), { loading }),
  menus: dynamic(import('../../demos/menus'), { loading }),
  sliders: dynamic(import('../../demos/sliders'), { loading }),
  snackbar: dynamic(import('../../demos/snackbar'), { loading }),
  tables: dynamic(import('../../demos/tables'), { loading }),
  textfields: dynamic(import('../../demos/textfields'), { loading }),
  toggles: dynamic(import('../../demos/toggles'), { loading }),
  tooltips: dynamic(import('../../demos/tooltips'), { loading }),
}

const enhance = mapProps((props) => ({
  DemoComponent: demos[props.url.query.component],
}))

const Demo = ({ DemoComponent }) => (
  <DemoLayout>
    <DemoComponent />
  </DemoLayout>
)

export default enhance(Demo)
