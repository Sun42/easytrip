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

// composants
import Loading from '../Loading';

const Result = ({
  cordinates, loading, resultList, handleAddNewActivity, gastronomieFilter,
  barFilter,
}) => (
  <div className="result">
    <div className="result-list">
      {loading && <Loading />}
      {gastronomieFilter.length === 0 && <div><p>Selectionnez un filtre ...</p></div>}
      <Item.Group divided>
        {
        gastronomieFilter.map((gastronomieFilterObject) => (
          <Activity
            restaurant={gastronomieFilterObject}
            handleAddNewActivity={handleAddNewActivity}
          />
        ))
        }
      </Item.Group>
    </div>

    <div className="result-map">
      {loading && <div><p>Recherche en cours...</p></div>}
      {!loading && (
      <Map
        center={cordinates}
        zoom={16}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {gastronomieFilter.length > 0 && (
          gastronomieFilter.map((restaurantObject) => {
            const { lat, lon, tags } = restaurantObject;
            const cordinatesPOI = [lat, lon];
            return (
              <Marker position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
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
            );
          })
        )}
      </Map>
      )}
    </div>
  </div>
);

const Activity = ({ handleAddNewActivity, restaurant }) => (
    <Item>
      <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
      <Item.Content>
        <h3>{restaurant.tags.name}</h3>
        <Item.Meta>
          <h4>{restaurant.tags.amenity}</h4>
        </Item.Meta>
        <Item.Description>Romantique théâtre ouvert sur la Manche,
          Étretat a inspiré les plus illustres artistes.
        </Item.Description>
        <Item.Extra>
          <Button>Plus d'info</Button>
          <Button
            onClick={(evt) => {
              const elemClicked = evt.target.closest('div.content');
              const elemTable = (elemClicked.children[0]);
              const elemToState = elemTable.innerHTML;
              console.log(elemToState);
              handleAddNewActivity(elemToState);
            }}
          >Carnet de voyage
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
);

Result.propTypes = {
  cordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  loading: PropTypes.bool.isRequired,
  resultList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleAddNewActivity: PropTypes.func.isRequired,
  gastronomieFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  barFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

Activity.propTypes = {
  handleAddNewActivity: PropTypes.func.isRequired,
  restaurant: PropTypes.object.isRequired,
};

export default Result;
