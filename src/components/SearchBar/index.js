import React from 'react';

import { Input } from 'semantic-ui-react';

// Styles
import './styles.scss';

const SearchBar = () => (
  <div className="search-bar">
    <form>
      <Input
        placeholder="Cherchez..."
        fluid
        icon="search"
        iconPosition="left"
      />
    </form>
  </div>
);

export default SearchBar;
