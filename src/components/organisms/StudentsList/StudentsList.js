import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import { useParams } from 'react-router';
import { useStudents } from 'hooks/useStudents';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />
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
