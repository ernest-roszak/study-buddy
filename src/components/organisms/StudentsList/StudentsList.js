import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import { useParams } from 'react-router';
import { useStudents } from 'hooks/useStudents';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default StudentsList;