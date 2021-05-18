import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DropDown from './DropDown';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const InputContainer = styled.div`
  position: relative;
`;
const Label = styled.label``;
const Input = styled.input`
  height: 30px;
  border: none;
  border-bottom: 1px solid grey;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-left: 40px;
  background-color: #f9f9f9;
  ::placeholder {
    font-size: 0.7rem;
    color: #ccc5c4;
  }
  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
`;

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  url?: string;
};

type Photos = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [searchName, setSearchName] = useState('');
  const [photos, setPhotos] = useState<Photos[]>([]);

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setSearchName(value);
  };

  const urlUsers = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const userResult = await axios.get(urlUsers);
        setUsers(userResult.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResult();
  }, []);

  useEffect(() => {
    const fetchResult = async () => {
      const photosArray: Photos[] = [];
      users.map(async user => {
        const photoUrl = `https://jsonplaceholder.typicode.com/photos/${user.id}`;
        const singlePhoto = await axios.get(photoUrl);
        photosArray.push(singlePhoto.data);
      });
      setPhotos(photosArray);
    };
    fetchResult();
  }, [users]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleClick = (username: string) => {
    setSearchName(username);
  };

  return (
    <Container>
      <InputContainer>
        <Label htmlFor="search-input">
          <Input
            type="text"
            id="search-input"
            placeholder="Search"
            value={searchName}
            onChange={e => handleInputChange(e)}
          />
          <SearchIcon alt="magnify-glass" src="loupe.svg" />
        </Label>
      </InputContainer>
      {searchName !== '' ? (
        <DropDown
          photos={photos}
          users={filteredUsers}
          handleClick={handleClick}
        />
      ) : null}
    </Container>
  );
};

export default App;
