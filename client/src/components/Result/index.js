import React from 'react';
import PropTypes from 'prop-types';

// React router
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

// semantic-ui
import {
  Button, Item, Icon, Card, Feed,
} from 'semantic-ui-react';

// react-leaflet AND leaflet
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';

// composants
import Loading from '../Loading';

const Result = ({
  cordinates, loading, handleAddNewActivity,
  gastronomieFilter, barFilter, cultureFilter, promenadeFilter,
  shoppingFilter, actaquaFilter,
}) => (
  <div className="result">
    <div className="result-list">

      {gastronomieFilter.length === [] && barFilter === []
      && cultureFilter === [] && promenadeFilter === []
      && shoppingFilter === []
      && <div><p>Selectionnez au moins un filtre...</p></div>}

      <Item.Group divided>
        {gastronomieFilter.length > 0
        && gastronomieFilter.map((object) => (
          <Activity key={object.id} object={object} handleAddNewActivity={handleAddNewActivity} />
        ))}
        {barFilter.length > 0
        && barFilter.map((object) => (
          <Activity key={object.id} object={object} handleAddNewActivity={handleAddNewActivity} />
        ))}
        {cultureFilter.length > 0
        && cultureFilter.map((object) => (
          <Activity key={object.id} object={object} handleAddNewActivity={handleAddNewActivity} />
        ))}
        {promenadeFilter.length > 0
        && promenadeFilter.map((object) => (
          <Activity key={object.id} object={object} handleAddNewActivity={handleAddNewActivity} />
        ))}
        {shoppingFilter.length > 0
        && shoppingFilter.map((object) => (
          <Activity key={object.id} object={object} handleAddNewActivity={handleAddNewActivity} />
        ))}
        {actaquaFilter.length > 0
        && actaquaFilter.map((object) => (
          <Activity key={object.id} object={object} handleAddNewActivity={handleAddNewActivity} />
        ))}
      </Item.Group>
    </div>

    <div className="result-map">
      {loading && <Loading />}
      {!loading && (
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
              <Marker
                key={object.id}
                position={cordinatesPOI}
              >
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{tags.amenity}</h4>
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
              <Marker key={object.id} position={cordinatesPOI}>
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
              <Marker key={object.id} position={cordinatesPOI}>
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
          promenadeFilter.length > 0
          && promenadeFilter.map((object) => {
            const { lat, lon, tags } = object;
            const cordinatesPOI = [lat, lon];
            return (
              <Marker key={object.id} position={cordinatesPOI}>
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
          shoppingFilter.length > 0
          && shoppingFilter.map((object) => {
            const { lat, lon, tags } = object;
            const cordinatesPOI = [lat, lon];
            return (
              <Marker key={object.id} position={cordinatesPOI}>
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
          actaquaFilter.length > 0
          && actaquaFilter.map((object) => {
            const { lat, lon, tags } = object;
            const cordinatesPOI = [lat, lon];
            return (
              <Marker key={object.id} position={cordinatesPOI}>
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
  <Card fluid>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Button
            color="orange"
            icon
            onClick={(evt) => {
             /** @fixme no-unused-vars
             const elemClicked = evt.target.closest('div.content');
             const elemTable = (elemClicked.children[0]);
             const elemToState = elemTable.innerHTML;
             */
            }}
          >
            <Icon name="info" />
          </Button>
          <Button
            color="black"
            icon
            onClick={(evt) => {
              const clickedItem1 = evt.target.closest('div');
              const clickedItem2 = clickedItem1.children[2];
              const clickedItem3 = clickedItem2.children[0];
              const clickedItem4 = clickedItem3.firstChild.textContent;
              handleAddNewActivity(clickedItem4);
            }}
          >
            <Icon name="book" />
          </Button>
          <Feed.Content>
            <Feed.Summary>
              {object.tags.name}
            </Feed.Summary>
            <Feed.Date content={object.tags.amenity} />
            {/* <p>{object.tags['addr:street']}</p>
            <p>{object.tags.phone}</p>
            <p>{object.tags.tourism}</p>
            <a href="http://{object.tags.website}">{object.tags.website}</a> */}
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

Result.propTypes = {
  cordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  loading: PropTypes.bool.isRequired,
  gastronomieFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  barFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  cultureFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  promenadeFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  shoppingFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  actaquaFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleAddNewActivity: PropTypes.func.isRequired,
};

Activity.propTypes = {
  handleAddNewActivity: PropTypes.func.isRequired,
  object: PropTypes.object.isRequired,
};

export default Result;
