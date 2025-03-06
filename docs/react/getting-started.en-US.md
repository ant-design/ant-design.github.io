---
group:
  title: Basic Usage
  order: 0
order: 0
title: Getting Started
---

Ant Design React is dedicated to providing a **good development experience** for programmers. Before starting, it is recommended to learn [React](https://react.dev) first, and correctly install and configure [Node.js](https://nodejs.org/) v16 or above.

The official guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step.

Finally, if you are working in a local development environment, please refer to [Scaffolding Guide](https://u.ant.design/guide) to create a new project.

---

## Your First Example

Here is a simple online codesandbox demo of an Ant Design component to show the usage of Ant Design React.

```sandpack
const sandpackConfig = {
  autorun: true,
};

import React from 'react';
import { Button, Space, DatePicker, version } from 'antd';

const App = () => (
  <div style={{ padding: '0 24px' }}>
    <h1>antd version: {version}</h1>
    <Space>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </Space>
  </div>
);

export default App;
```

Follow the steps below to play around with Ant Design yourself:

### 1. Create a codesandbox

Visit https://u.ant.design/codesandbox-repro to create a codesandbox -- don't forget to press the save button as well to create a new instance.

### 2. Use and modify an antd component

Replace the contents of `index.js` with the following code. As you can see, there is no difference between antd's components and typical React components.

If you have already set things up by following the [Use with create-react-app](/docs/react/use-with-create-react-app), replace the content of `/src/index.js` as follows:

```jsx
import React, { useState } from 'react';
import { DatePicker, message } from 'antd';
import { createRoot } from 'react-dom/client';

import './index.css';

const App = () => {
  const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = (value) => {
    messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
      {contextHolder}
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
```

### 3. Explore more components

You can view the list of components in the side menu of the Components page, such as the [Alert](/components/alert) component. Plenty of examples are also provided in the component pages and API documentation as well.

Click the "Open in Editor" icon in the first example to open an editor with source code to use out-of-the-box. Now you can import the `Alert` component into the codesandbox:

```diff
- import { DatePicker, message } from 'antd';
+ import { DatePicker, message, Alert } from 'antd';
```

Now add the following jsx inside the `render` function.

```diff
  <DatePicker onChange={value => this.handleChange(value)} />
  <div style={{ marginTop: 20 }}>
-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
+   <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
  </div>
```

Select a date, and you can see the effect in the preview area on the right:

<img width="420" src="https://gw.alipayobjects.com/zos/antfincdn/JrXptUm1Nz/6b50edc4-3a3c-4b2a-843e-f9f0af2c4667.png" alt="codesandbox screenshot" />

OK! Now that you know the basics of using antd components, you are welcome to explore more components in the codesandbox. When reporting a bug with ant design, we also strongly recommend using codesandbox to provide a reproducible demo as well.

### 4. Next Steps

During actual real-world project development, you will most likely need a development workflow consisting of `compile/build/deploy/lint/debug/` deployment. You can read the following documents on the subject or use the following scaffolds and examples provided below:

- [Ant Design Pro](https://pro.ant.design/)
- [create-next-app](https://github.com/ant-design/ant-design-examples/tree/main/examples/with-nextjs-inline-style)
- More scaffolds at [Scaffold Market](https://scaffold.ant.design/)

## Test with Jest

If you use `create-react-app` follow the instructions [here](/docs/react/use-with-create-react-app) instead.

Jest does not support `esm` modules, and Ant Design uses them. In order to test your Ant Design application with Jest you have to add the following to your Jest config :

```json
"transform": { "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest" }
```

## Import on Demand

`antd` supports tree shaking of ES modules, so using `import { Button } from 'antd';` would drop js code you didn't use.

## Customize your Workflow

If you want to customize your workflow, we recommend using [webpack](https://webpack.js.org) or [vite](https://vitejs.dev/) to build and debug code. You can try out plenty of [boilerplates](https://github.com/enaqx/awesome-react#react-tools) available in the React ecosystem.

There are also some [scaffolds](https://scaffold.ant.design/) which have already been integrated into antd, so you can try and start with one of these and even contribute.
