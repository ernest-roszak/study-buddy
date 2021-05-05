import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';

const StudentDetails = ({ student }) => {
  return (
    <div>
      <Title>
        {student.name} | Group: {student.group}
      </Title>
      <p> {student.attendance}</p>
      <StyledAverage value={student.average}>{student.average}</StyledAverage>
    </div>
  );
};

StudentDetails.propTypes = {};

export default StudentDetails;
