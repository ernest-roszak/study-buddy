import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Average } from 'components/atoms/Average/Average';

const StudentDetails = ({ student }) => {
  return (
    <div>
      <Title>
        {student.name} | Group: {student.group}
      </Title>
      <p> {student.attendance}</p>
      <Average value={student.average}>{student.average}</Average>
    </div>
  );
};

StudentDetails.propTypes = {};

export default StudentDetails;
