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
  cordinates, loading, handleAddNewActivity, allPoiOfDestination,
  gastronomieFilter, barFilter, cultureFilter,
}) => (
  <div className="result">
    <div className="result-list">
      {/* {loading && <Loading />} */}
      {/* {allPoiOfDestination.length === 0 && <div><p>Selectionnez un filtre ...</p></div>} */}
      <Item.Group divided>
        {gastronomieFilter.length > 0
        && gastronomieFilter.map((object) => (
          <Activity object={object} />
        ))}
        {barFilter.length > 0
        && barFilter.map((object) => (
          <Activity object={object} />
        ))}
        {cultureFilter.length > 0
        && cultureFilter.map((object) => (
          <Activity object={object} />
        ))}
      </Item.Group>
    </div>

    <div className="result-map">
      {loading && <div><p>Recherche en cours...</p></div>}
      {/* {!loading && ( */}
      <Map
        center={cordinates}
        zoom={16}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {
          gastronomieFilter.length > 0
          && gastronomieFilter.map((object) => {
            const { lat, lon, tags } = object;
            const cordinatesPOI = [lat, lon];
            return (
              <Marker position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{tags.amenity}</h4>
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
          }

        {
          barFilter.length > 0
          && barFilter.map((object) => {
            const { lat, lon, tags } = object;
            const cordinatesPOI = [lat, lon];
            return (
              <Marker position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{tags.amenity}</h4>
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
          }

        {
          cultureFilter.length > 0
          && cultureFilter.map((object) => {
            const { lat, lon, tags } = object;
            const cordinatesPOI = [lat, lon];
            return (
              <Marker position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{tags.amenity}</h4>
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
          }

      </Map>
      )}
    </div>
  </div>
);

const Activity = ({ handleAddNewActivity, object }) => (
  <Item>
    <Item.Content>
      <h3>{object.tags.name}</h3>
      <Item.Meta>
        <h4>{object.tags.amenity}</h4>
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
  handleAddNewActivity: PropTypes.func.isRequired,
  allPoiOfDestination: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  gastronomieFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  barFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  cultureFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,

};

Activity.propTypes = {
  handleAddNewActivity: PropTypes.func.isRequired,
  object: PropTypes.object.isRequired,
};

export default Result;
