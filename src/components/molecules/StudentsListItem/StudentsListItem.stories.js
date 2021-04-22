import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const BadMarks = Template.bind({});
BadMarks.args = {
  userData: {
    name: 'Ernest Roszak',
    attendance: '55%',
    average: 2.5,
  },
};
export const MediumMarks = Template.bind({});
MediumMarks.args = {
  userData: {
    name: 'Ernest Roszak',
    attendance: '55%',
    average: 3.5,
  },
};
export const GoodMarks = Template.bind({});
GoodMarks.args = {
  userData: {
    name: 'Ernest Roszak',
    attendance: '55%',
    average: 5.5,
  },
};
export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
    name: 'Ernest Roszak',
    attendance: '55%',
    average: null,
  },
};
