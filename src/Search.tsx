import styled from 'styled-components';

const Container = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

const Search = () => {
  return (
    <Container>
      <Label htmlFor="search-input">
        <Input type="text" id="search-input" value="" placeholder="Search" />
      </Label>
    </Container>
  );
};

export default Search;
