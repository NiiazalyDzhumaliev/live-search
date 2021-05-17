import React from 'react';
import styled from 'styled-components';

const List = styled.ul``;
const Item = styled.li`
  cursor: pointer;
  text-transform: capitalize;
`;

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UsersListProps = {
  users: Users[];
  handleClick: (username: string) => void;
};

const UsersList: React.FC<UsersListProps> = props => {
  const { users, handleClick } = props;
  return (
    <List>
      {users.map(user => (
        <Item key={user.id} onClick={() => handleClick(user.name)}>
          {user.name}
        </Item>
      ))}
    </List>
  );
};

export default UsersList;
