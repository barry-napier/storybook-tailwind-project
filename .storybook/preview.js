/** @type { import('@storybook/html').Preview } */

import '../src/styles.css'; // Adjust the path to your CSS file as needed

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;