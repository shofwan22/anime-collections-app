import { useState, KeyboardEvent } from 'react';
import { stySearchContainer } from './styles';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search = (props: SearchProps) => {
  const { onSearch } = props;
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={stySearchContainer}>
      <div className="icon-container">
        <i className="fa fa-search" onClick={handleSearch}></i>
      </div>
      <input
        type="text"
        value={query}
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyPress}
      />
    </div>
  );
};

export default Search;
