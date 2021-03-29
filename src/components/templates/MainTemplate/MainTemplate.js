import { Navigation } from 'components/organisms/Navigation/Navigation';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import React from 'react';
import NewsSection from '../NewsSection/NewsSection';

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};
