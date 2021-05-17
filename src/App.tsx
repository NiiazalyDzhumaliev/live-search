import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DropDown from './DropDown';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1``;
const InputContainer = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState('');

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setSearchName(value);
  };

  const urlUsers = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const result = await axios.get(urlUsers);
        setUsers(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResult();
  }, []);

  let filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleClick = (username: string) => {
    setSearchName(username);
  };

  return (
    <Container>
      {loading ? <Header>Loading...</Header> : <Header>LiveSearch</Header>}
      <InputContainer>
        <Label htmlFor="search-input">
          <Input
            type="text"
            id="search-input"
            placeholder="Search"
            value={searchName}
            onChange={e => handleInputChange(e)}
          />
        </Label>
      </InputContainer>
      {searchName !== '' ? (
        <DropDown users={filteredUsers} handleClick={handleClick} />
      ) : null}
    </Container>
  );
};

export default App;
