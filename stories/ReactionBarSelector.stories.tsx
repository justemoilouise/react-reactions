import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  defaultProps,
  ReactionBarSelector,
  ReactionBarSelectorProps,
} from '../src/components/custom/ReactionBarSelector';
import './helper.css';

const meta: Meta = {
  title: 'ReactionBarSelector',
  component: ReactionBarSelector,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ReactionBarSelectorProps> = args => (
  <div className="center">
    <ReactionBarSelector {...args} />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Images = Template.bind({});

Default.args = { ...defaultProps };

Images.args = {
  reactions: [
    {
      label: 'haha',
      node: (
        <img
          height="40"
          src="data:image/png;base64,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"
        />
      ),
    },
    {
      label: 'cry',
      node: (
        <img
          height="40"
          src="data:image/png;base64,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"
        />
      ),
    },
    {
      label: 'heart',
      node: (
        <img
          height="40"
          src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-heart-thin.png"
        />
      ),
    },
    {
      label: 'wow',
      node: (
        <img
          height="40"
          src="https://www.pinclipart.com/picdir/big/11-111412_wow-smile-smiley-svg-icon-clipart.png"
        />
      ),
    },
  ],
  iconSize: 40,
};
