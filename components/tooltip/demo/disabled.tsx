import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Tooltip title={disabled ? null : 'prompt text'}>
      <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable' : 'Disable'}</Button>
    </Tooltip>
  );
};

export default App;
