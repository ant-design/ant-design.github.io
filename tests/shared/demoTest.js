import glob from 'glob';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

export default function demoTest(component, options = {}) {
  const files = glob.sync(`./components/${component}/demo/*.md`);

  files.forEach((file) => {
    let testMethod = options.skip === true ? test.skip : test;
    if (Array.isArray(options.skip) && options.skip.some(c => file.includes(c))) {
      testMethod = test.skip;
    }
    testMethod(`renders ${file} correctly`, () => {
      const demo = require('../.' + file);
      const wrapper = render(demo);
      expect(renderToJson(wrapper)).toMatchSnapshot();
    });
  });
}
