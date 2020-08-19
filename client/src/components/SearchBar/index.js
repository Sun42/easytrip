import React from 'react';
import Proptypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import './styles.scss';

const SearchBar = ({
  search, handleChange, handleSubmit, loading,
}) => (
  <div className="search-bar">
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        value={search}
        onChange={(evt) => {
          const text = evt.target.value;
          handleChange(text);
          console.log('je suis la');
        }}
        loading={loading}
        placeholder="quelle est votre destination?"
        fluid
        icon="search"
        iconPosition="left"
      />
    </form>
  </div>
);

SearchBar.propTypes = {
  loading: Proptypes.bool.isRequired,
  search: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  handleSubmit: Proptypes.func.isRequired,
};

export default SearchBar;
