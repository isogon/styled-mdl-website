import React from 'react';
import MdAdd from 'react-icons/lib/md/add';

import { Tooltip, Button } from 'styled-mdl';

const demo = () => (
  <Tooltip message="Follow" position="left">
    <Button icon><MdAdd /></Button>
  </Tooltip>
);

const caption = 'Left side';
const code = `<Tooltip message="Follow" position="left">
  <Button icon><MdAdd /></Button>
</Tooltip>`;

export default { demo, caption, code };
