import { connect } from 'react-redux';
import Result from '../components/Result';
import { addNewActivity } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  cordinates: state.filters.cordinates,
  name: state.filters.name,
  loading: state.filters.loading,
  allPoiOfDestination: state.filters.allPOI,
  gastronomieFilter: state.filters.allFilters.gastronomie,
  barFilter: state.filters.allFilters.bar,
  cultureFilter: state.filters.allFilters.culture,
  promenadeFilter: state.filters.allFilters.promenade,
  shoppingFilter: state.filters.allFilters.shopping,
  actaquaFilter: state.filters.allFilters.actaqua,

});

const mapDispatchToState = (dispatch) => ({
  handleAddNewActivity: (clickedItem4) => {
    dispatch(addNewActivity(clickedItem4));
  },

});

export default connect(mapStateToProps, mapDispatchToState)(Result);
