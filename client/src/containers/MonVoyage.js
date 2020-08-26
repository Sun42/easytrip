import { connect } from 'react-redux';
import MonVoyage from '../components/MonVoyage';

const mapStateToProps = (state) => ({
  destination: state.trips.destination,
  destination2: state.filters.search,
  tripBook: [
    {
      tripInfo: [
        {
          tripName: 'Mon voyage à Etretat',
          destination: 'Etretat',
        },
      ],
      activities: [
        {
          category: 'promenade',
        },
        {
          category: 'promenade',
        },
        {
          category: 'promenade',
        },
        {
          category: 'promenade',
        },
      ],
    },
  ],
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MonVoyage);
