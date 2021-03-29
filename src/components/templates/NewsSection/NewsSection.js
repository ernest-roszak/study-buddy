import { Button } from 'components/atoms/Button/Button';
import React, { useEffect, useState } from 'react';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import axios from 'axios';

export const NewsSection = () => {
  const [articles, setArticels] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
            allArticles {
                id
                title
                category
                content
                image {
                    url
                    }
            }
        }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticels(data.allArticles))
      .catch(() => setError("Sorry we couldn't load articles for you"));
  }, []);
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};
