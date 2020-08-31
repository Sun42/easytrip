// import axios from 'axios';

// import {
//   ADD_GASTRONOMIE, ADD_BAR,
//   addGastronomieToState, addBarToState,
// } from '../store/action/filters-actions';

// const filtersMiddleware = (store) => (next) => (action) => {
//   next(action);
//   switch (action.type) {
//     case ADD_GASTRONOMIE: {
//       console.log('je suis dans le mv');
//       const destination = store.getState().filters.search;
//       axios({
//         method: 'get',
//         url: `http://localhost:3000/api/search?location=${destination}&filters=1&food`,
//         data: destination,
//       })
//         .then((res) => {
//           store.dispatch(addGastronomieToState(res.data.elements));
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }
//       break;
    // case ADD_BAR: {
    //   const destination = store.getState().filters.search;
    //   axios({
    //     method: 'get',
    //     url: `http://localhost:3000/api/search?location=${destination}&filters=1&pub`,
    //     data: destination,
    //   })
    //     .then((res) => {
    //       store.dispatch(addBarToState(res.data.elements));
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    //   break;
    // }
//     default:
//   }
// };

// export default filtersMiddleware;
