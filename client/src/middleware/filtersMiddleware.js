// import axios from 'axios';

// import {
//   GET_PREF_GASTRONOMIE, GET_PREF_BAR,
//   getFilterGastronomieToState, getFilterBarToState,
// } from '../store/action/filters-actions';

// const filtersMiddleware = (store) => (next) => (action) => {
//   next(action);
//   switch (action.type) {
//     case GET_PREF_GASTRONOMIE: {
//       console.log('je suis dans le mv');
//       const destination = store.getState().filters.search;
//       axios({
//         method: 'get',
//         url: `http://localhost:3000/api/search?location=${destination}&filters=1&food=1`,
//         data: destination,
//       })
//         .then((res) => {
//           store.dispatch(getFilterGastronomieToState(res.data.elements));
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }
//       break;
//     case GET_PREF_BAR: {
//       const destination = store.getState().filters.search;
//       axios({
//         method: 'get',
//         url: `http://localhost:3000/api/search?location=${destination}&filters=1&pub=1`,
//         data: destination,
//       })
//         .then((res) => {
//           store.dispatch(getFilterBarToState(res.data.elements));
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//       break;
//     }
//     default:
//   }
// };

// export default filtersMiddleware;
