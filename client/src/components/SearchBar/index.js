import React from 'react';
import PropTypes from 'prop-types';

// selantuc-ui
import { Input } from 'semantic-ui-react';

import './styles.scss';

const SearchBar = ({
  searchInput, handleSubmit,
  loading, handleSearch,
}) => (
  <div className="search-bar">
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        value={searchInput}
        onChange={(evt) => {
          const text = evt.target.value;
          handleSearch(text);
        }}
        loading={loading}
        action="Recherchez"
        placeholder="Où allez-vous ?"
        fluid
        focus
        icon="search"
        iconPosition="left"
      />
    </form>
  </div>
);

SearchBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchInput: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
