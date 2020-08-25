import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { getSearch, getSearchSubmit } from '../store/action/filters-actions';

const mapStateToProps = (state) => ({
  searchInput: state.filters.search,
  newMap: state.filters.cordinates,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearch: (text) => {
    dispatch(getSearch(text));
  },

  handleSubmit: () => {
    dispatch(getSearchSubmit());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
