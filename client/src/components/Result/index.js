import React from 'react';
import PropTypes from 'prop-types';

// React router
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

// semantic-ui
import {
  Button, Item,
} from 'semantic-ui-react';

// react-leaflet AND leaflet
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';

const Result = ({
  cordinates, name, loading,
  resultList, handleAddNewActivity
}) => {
  console.log(resultList);
  return (
    <div className="result">
      <div className="result-list">
        {loading && <div><p>Recherche des resultats...</p></div>}
        <Item.Group divided>
          {
        resultList.map((resultObject) => (
          <Activity {...resultObject} handleAddNewActivity={handleAddNewActivity} />
        ))
        }
        </Item.Group>
      </div>

      <div className="result-map">
        {loading && <div><p>Recherche en cours...</p></div>}
        {!loading
      && (
      <Map
        center={cordinates}
        zoom={11}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={cordinates}>
          <Popup>
            <h3>{name}</h3>
            <p><Link to="/amenity">Plus d'info</Link></p>
            <button
              type="submit"
              onClick={() => {
                console.log('popup buton');
              }}
            >
              Click
            </button>
          </Popup>
        </Marker>
      </Map>
      )}
      </div>
    </div>
  );
};

const Activity = ({ handleAddNewActivity, location }) => (
  <Item>
    <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
    <Item.Content>
      <h3>Randonnée entre plages et falaises</h3>
      <Item.Meta>
        <span className="cinema">{location.address.city}</span>
      </Item.Meta>
      <Item.Description>Romantique théâtre ouvert sur la Manche,
        Étretat a inspiré les plus illustres artistes.
      </Item.Description>
      <Item.Extra>
        <Button>Plus d'info</Button>
        <Button
          onClick={() => {
            handleAddNewActivity();
          }}
        >Carnet de voyage
        </Button>
      </Item.Extra>
    </Item.Content>
  </Item>
);

Result.propTypes = {
  cordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  resultList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleAddNewActivity: PropTypes.func.isRequired,
};

Activity.propTypes = {
  handleAddNewActivity: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Result;
