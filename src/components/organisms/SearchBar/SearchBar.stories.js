import React from 'react';
import { SearchBar } from './SearchBar';

export default {
  title: 'Components/Molecules/SearchBar',
  component: SearchBar,
};

const matchingStudents = [
  {
    name: 'Ernest',
  },
  {
    name: 'Roman',
  },
];

const Template = (args) => <SearchBar students={matchingStudents} {...args} />;

export const Search = Template.bind({});
