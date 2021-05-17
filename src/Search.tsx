import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Header = styled.h1``;
const Label = styled.label``;
const Input = styled.input``;

const Search = () => {
  const [state, setState] = useState({
    query: '',
    results: [],
    loading: false,
    message: '',
  });

  return (
    <Container>
      <Header>Live search</Header>
      <Label htmlFor="search-input">
        <Input type="text" id="search-input" value="" />
      </Label>
    </Container>
  );
};

export default Search;
