import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import { SearchBarWrapper, SearchResultItem, SearchResults, SearchWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="Search" />
        <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((student, index) => (
              <SearchResultItem {...getItemProps({ item: student, index })} isHighlighted={highlightedIndex === index} key={student.id}>
                {student.name}
              </SearchResultItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
