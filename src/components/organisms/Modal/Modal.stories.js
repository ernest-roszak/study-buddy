import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from './Modal';

export default {
  title: 'Components/organisms/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails
      student={{
        id: '1',
        name: 'Adam Romański',
        attendance: '39%',
        average: '2.3',
        group: 'A',
      }}
    ></StudentDetails>
  </Modal>
);

export const Default = Template.bind({});
