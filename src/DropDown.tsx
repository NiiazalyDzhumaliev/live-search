import React from 'react';
import styled from 'styled-components';

const List = styled.ul``;
const Item = styled.li`
  cursor: pointer;
  text-transform: capitalize;
`;

type Photos = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  url?: string;
};

type UsersListProps = {
  users: Users[];
  photos: Photos[];
  handleClick: (username: string) => void;
};

const UsersList: React.FC<UsersListProps> = props => {
  const { users, handleClick, photos } = props;

  const compare = () => {
    const newUsers = [...users];
    const newPhotos = [...photos];

    newUsers.forEach(user => {
      newPhotos.forEach(photo => {
        if (user.id === photo.id) {
          user.url = photo.thumbnailUrl;
        }
      });
    });
    return newUsers;
  };
  const usersWithUrl = compare();

  return (
    <List>
      {usersWithUrl.map(user => (
        <Item key={user.id} onClick={() => handleClick(user.name)}>
          <img alt="user-thumbnail" src={user.url} />
          {user.name}
        </Item>
      ))}
    </List>
  );
};

export default UsersList;
