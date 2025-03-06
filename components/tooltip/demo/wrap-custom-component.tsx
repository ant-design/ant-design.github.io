import { Tooltip } from 'antd';
import React from 'react';

const ComponentWithEvents: React.FC<React.HTMLAttributes<HTMLSpanElement>> = (props) => (
  <span {...props}>This text is inside a component with the necessary events exposed.</span>
);

const App: React.FC = () => (
  <Tooltip title="prompt text">
    <ComponentWithEvents />
  </Tooltip>
);

export default App;
