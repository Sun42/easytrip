// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from '../components/App';
import { checkAuth } from '../store/action/login-actions';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  isLogged: state.login.isLogged,
  carnet: state.trips.carnet,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  
  checkAuth: () => {
    console.log('mapDispatchToProps.checkAuth');
    dispatch(checkAuth());
  }

  });



export default connect(mapStateToProps, mapDispatchToProps)(App);
