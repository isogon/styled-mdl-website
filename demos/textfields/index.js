import React, { Component } from 'react';

import DemoPage from '../../components/DemoPage';

import text from './demos/text';
import error from './demos/error';
import multiLine from './demos/multiLine';
import helper from './demos/helper';
// import select from './demos/select';

const title = 'Text Fields';
const subtitle = 'Textual input components';
const demos = [
  { demos: [text, error] },
  { demos: [helper, multiLine] },
  // { demos: [select] },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Buttons extends Component {
  render() {
    return <DemoPage title={title} subtitle={subtitle} demoGroups={demos} />;
  }
}
