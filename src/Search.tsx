import { useState } from 'react';

const Search = () => {
  const [state, setState] = useState({
    query: '',
    results: [],
    loading: false,
    message: '',
  });
};

export default Search;
