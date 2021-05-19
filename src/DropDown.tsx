import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  width: 343px;
  list-style-type: none;
  padding: 0;
`;
const Item = styled.li`
  display: flex;
  padding: 3px 0 3px 5px;
  margin: 5px 0;
  align-items: center;
  height: 48px;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-size: 12px;
  color: lightgrey;
`;
const Name = styled.span`
  font-size: 14px;
`;

const UserInfo = styled.div`
  line-height: 16px;
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
          <UserImage alt="user-thumbnail" src={user.url} />
          <UserInfo>
            <Name>{user.name}</Name>
            <br />
            <UserName>{`@${user.username}`}</UserName>
          </UserInfo>
        </Item>
      ))}
    </List>
  );
};

export default UsersList;
