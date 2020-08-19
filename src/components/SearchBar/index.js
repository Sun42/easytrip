import React, { useState } from 'react';

import { Input } from 'semantic-ui-react';

// Styles
import './styles.scss';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const onInputChange = (content) => {
    setSearch(content);
  }
  return (
    <div className="search-bar">
      <form>
        <Input
          placeholder="Cherchez..."
          fluid
          icon="search"
          iconPosition="left"
          value={search}
          onChange={(evt) => {
            console.log(evt.target.value);
            const content = evt.target.value;
            onInputChange(content);
          }}
        />
      </form>
    </div>
)};

export default SearchBar;
