import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Search from './Search';

const Container = styled.div``;
const Header = styled.h1``;

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const App = () => {
  const [users, setUsers] = useState<Users[] | null>(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <Container>
      {loading ? <Header>Loading...</Header> : <Header>LiveSearch</Header>}
      <Search />
    </Container>
  );
};

export default App;
