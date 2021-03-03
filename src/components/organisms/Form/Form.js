import React from 'react';
import { Wrapper, StyledTitle } from 'components/organisms/UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

export const Form = ({ handleAddUser, handleValueChange, formValue }) => {
  return (
    <>
      <Wrapper as="form">
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" onChange={handleValueChange} value={formValue.name} />
        <FormField label="Attendance" id="attendance" name="attendance" onChange={handleValueChange} value={formValue.attendance} />
        <FormField label="Average" id="average" name="average" onChange={handleValueChange} value={formValue.average} />
        <Button type="submit" onClick={handleAddUser}>
          Add
        </Button>
      </Wrapper>
    </>
  );
};
