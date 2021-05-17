import React from 'react';
import styled from 'styled-components';

const List = styled.ul``;
const Item = styled.li``;

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UsersListProps = {
  users: Users[];
};

const UsersList: React.FC<UsersListProps> = props => {
  const { users } = props;
  return (
    <List>
      {users.map(user => (
        <Item key={user.id}>{user.name}</Item>
      ))}
    </List>
  );
};

export default UsersList;
