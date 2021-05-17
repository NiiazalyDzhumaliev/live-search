import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div``;
const Header = styled.h1``;
const Label = styled.label``;
const Input = styled.input``;

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const Search = () => {
  const [users, setUsers] = useState<Users[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const result = await axios.get(usersUrl);
        setUsers(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResult();
  }, []);

  console.log(users);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const element = event.currentTarget as HTMLInputElement;
    const query = element.value;
    console.log(query);
  };

  const usersUrl = 'https://jsonplaceholder.typicode.com/users';

  return (
    <Container>
      {loading ? <Header>Loading</Header> : <Header>Live search</Header>}
      <Label htmlFor="search-input">
        <Input
          type="text"
          id="search-input"
          value=""
          placeholder="Search"
          onChange={event => handleInputChange(event)}
        />
      </Label>
    </Container>
  );
};

export default Search;
