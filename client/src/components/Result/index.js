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
  foodFilter, artFilter, pubFilter, excursionFilter, shopFilter,
  acquaticFilter, funFilter, historicFilter,
  foodCheck, artCheck, pubCheck, excursionCheck, shopCheck, acquaticCheck,
  funCheck, historicCheck,
}) => (
  <div className="result">
    <div className="result-list">
      {/* {gastronomieFilter.length === [] && barFilter === []
      && cultureFilter === [] && promenadeFilter === []
      && shoppingFilter === []
      && <div><p>Selectionnez au moins un filtre...</p></div>} */}
      <Item.Group divided>
        {foodCheck === true
            && foodFilter.map((object) => (
              <Activity
                key={object.id}
                object={object}
                handleAddNewActivity={handleAddNewActivity}
              />
            ))}

        {artCheck === true
            && artFilter.map((object) => (
              <Activity
                key={object.id}
                object={object}
                handleAddNewActivity={handleAddNewActivity}
              />
            ))}

        {pubCheck === true
            && foodFilter.map((object) => (
              <Activity
                key={object.id}
                object={object}
                handleAddNewActivity={handleAddNewActivity}
              />
            ))}

        {excursionCheck === true
            && excursionFilter.map((object) => (
              <Activity
                key={object.id}
                object={object}
                handleAddNewActivity={handleAddNewActivity}
              />
            ))}

        {shopCheck === true
            && shopFilter.map((object) => (
              <Activity
                key={object.id}
                object={object}
                handleAddNewActivity={handleAddNewActivity}
              />
            ))}

        {acquaticCheck === true
            && acquaticFilter.map((object) => (
              <Activity
                key={object.id}
                object={object}
                handleAddNewActivity={handleAddNewActivity}
              />
            ))}

        {funCheck === true
            && funFilter.map((object) => (
              <Activity
                key={object.id}
                object={object}
                handleAddNewActivity={handleAddNewActivity}
              />
            ))}

        {historicCheck === true
            && historicFilter.map((object) => (
              <Activity
                key={object.id}
                object={object}
                handleAddNewActivity={handleAddNewActivity}
              />
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
          foodCheck === true
          && foodFilter.map((object) => {
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
          artCheck === true
          && artFilter.map((object) => {
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
          pubCheck === true
          && pubFilter.map((object) => {
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
          excursionCheck === true
          && excursionFilter.map((object) => {
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
          shopCheck === true
          && shopFilter.map((object) => {
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
          acquaticCheck === true
          && acquaticFilter.map((object) => {
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
          funCheck === true
          && funFilter.map((object) => {
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
          historicCheck === true
          && historicFilter.map((object) => {
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
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

Result.propTypes = {
  cordinates: PropTypes.arrayOf(PropTypes.number),
  loading: PropTypes.bool,
  foodFilter: PropTypes.arrayOf(PropTypes.object.isRequired),
  artFilter: PropTypes.arrayOf(PropTypes.object.isRequired),
  pubFilter: PropTypes.arrayOf(PropTypes.object.isRequired),
  excursionFilter: PropTypes.arrayOf(PropTypes.object.isRequired),
  shopFilter: PropTypes.arrayOf(PropTypes.object.isRequired),
  acquaticFilter: PropTypes.arrayOf(PropTypes.object.isRequired),
  funFilter: PropTypes.arrayOf(PropTypes.object.isRequired),
  historicFilter: PropTypes.arrayOf(PropTypes.object.isRequired),
  foodCheck: PropTypes.bool,
  artCheck: PropTypes.bool,
  pubCheck: PropTypes.bool,
  excursionCheck: PropTypes.bool,
  shopCheck: PropTypes.bool,
  acquaticCheck: PropTypes.bool,
  funCheck: PropTypes.bool,
  historicCheck: PropTypes.bool,
  handleAddNewActivity: PropTypes.func.isRequired,
};

Result.defaultProps = {
  cordinates: [48.117266, -1.6777926],
  loading: false,
  foodFilter: [],
  artFilter: [],
  pubFilter: [],
  excursionFilter: [],
  shopFilter: [],
  acquaticFilter: [],
  funFilter: [],
  historicFilter: [],
  foodCheck: false,
  artCheck: false,
  pubCheck: false,
  excursionCheck: false,
  shopCheck: false,
  acquaticCheck: false,
  funCheck: false,
  historicCheck: false,
};

Activity.propTypes = {
  handleAddNewActivity: PropTypes.func.isRequired,
  object: PropTypes.object.isRequired,
};

export default Result;
