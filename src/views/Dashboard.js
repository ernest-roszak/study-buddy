import React from 'react';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;
  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
