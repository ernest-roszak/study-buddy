import React from 'react';
import NewsSection from './NewsSection';

export default {
  title: 'Components/Organisms/NewsSections',
  component: NewsSection,
};

const Template = (args) => <NewsSection {...args} />;

export const AllNews = Template.bind({});

export const Image = Template.bind({});
Image.args = {
  image: true,
};
