import React from 'react';
import PropTypes from 'prop-types';

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
// import { Projection } from 'leaflet';

const Result = ({
  cordinates, loading, 
  handleAddNewActivity, newActivityAdded, mytrips,
  foodFilter, artFilter, pubFilter, excursionFilter, shopFilter,
  acquaticFilter, funFilter, historicFilter,
  foodCheck, artCheck, pubCheck, excursionCheck, shopCheck, acquaticCheck,
  funCheck, historicCheck, checkbox,
}) => {

  return (
  <div className="result">
    <div className="result-list">
      {/* {gastronomieFilter.length === [] && barFilter === []
      && cultureFilter === [] && promenadeFilter === []
      && shoppingFilter === []
      && <div><p>Selectionnez au moins un filtre...</p></div>} */}
      
      {/* {
      newActivityAdded === true 
      &&
      <div className="popup">L'activité a été ajouté à votre carnet de voyage</div>
      } */}

      {!foodCheck && !artCheck && !pubCheck && !excursionCheck && !shopCheck && !acquaticCheck && !funCheck && !historicCheck &&
        <div className="explications">
        <div className="box1">
          <Icon name="check circle"/>
          <h3>Carnet</h3>
          <p>...ensuite selectionnez ou créer votre carnet...</p>
        </div>
        <div className="box2">
          <Icon name="globe" />
          <h3>Destination</h3>
          <p>D'abord selectionnez votre destination...</p>
        </div>
        <div className="box3">
          <Icon name="check circle"/>
          <h3>Activités</h3>
          <p>...et enfin, dites nous quelles sont
            vos activités préférées et nous nous chargerons du reste !</p>
        </div>
        </div>
      }

      <Item.Group divided>
      {/* {loading && <Loading />} */}
        {foodCheck === true
            && foodFilter.map((object) => (
              <Activity
                key={object.id}
                mytrips={mytrips} // supprimer ?
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
            && pubFilter.map((object) => (
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
            const category = object.tags.amenity || object.tags.tourism || object.tags.leisure || object.tags.sport || object.tags.shop || object.tags.historic;
            const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
            return (
              <Marker
                key={object.id}
                position={cordinatesPOI}
              >
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{capitalizeCategory}</h4>
                  <button
                    type="submit"
                    onClick={() => {
                      handleAddNewActivity(
                        {
                          location: 
                          {
                            lat: object.lat, 
                            lon: object.lon, 
                          },
                          name: object.tags.name ? object.tags.name : 'Nom inconnu',
                          information: capitalizeCategory,
                        });
                    }}
                  >
                    Ajoutez au carnet
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
            const category = object.tags.amenity || object.tags.tourism || object.tags.leisure || object.tags.sport || object.tags.shop || object.tags.historic;
            const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
            return (
              <Marker key={object.id} position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{capitalizeCategory}</h4>
                  <button
                    type="submit"
                    onClick={() => {
                      handleAddNewActivity(
                        {
                          location: 
                          {
                            lat: object.lat, 
                            lon: object.lon, 
                          },
                          name: object.tags.name ? object.tags.name : 'Nom inconnu',
                          information: capitalizeCategory,
                        });
                    }}
                  >
                    Ajoutez au carnet
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
            const category = object.tags.amenity || object.tags.tourism || object.tags.leisure || object.tags.sport || object.tags.shop || object.tags.historic;
            const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
            return (
              <Marker key={object.id} position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{capitalizeCategory}</h4>
                  <button
                    type="submit"
                    onClick={() => {
                      handleAddNewActivity(
                        {
                          location: 
                          {
                            lat: object.lat, 
                            lon: object.lon, 
                          },
                          name: object.tags.name ? object.tags.name : 'Nom inconnu',
                          information: capitalizeCategory,
                        });
                    }}
                  >
                    Ajoutez au carnet
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
            const category = object.tags.amenity || object.tags.tourism || object.tags.leisure || object.tags.sport || object.tags.shop || object.tags.historic;
            const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
            return (
              <Marker key={object.id} position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{capitalizeCategory}</h4>
                  <button
                    type="submit"
                    onClick={() => {
                      handleAddNewActivity(
                        {
                          location: 
                          {
                            lat: object.lat, 
                            lon: object.lon, 
                          },
                          name: object.tags.name ? object.tags.name : 'Nom inconnu',
                          information: capitalizeCategory,
                        });
                    }}
                  >
                    Ajoutez au carnet
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
            const category = object.tags.amenity || object.tags.tourism || object.tags.leisure || object.tags.sport || object.tags.shop || object.tags.historic;
            const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
            return (
              <Marker key={object.id} position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{capitalizeCategory}</h4>
                  <button
                    type="submit"
                    onClick={() => {
                      handleAddNewActivity(
                        {
                          location: 
                          {
                            lat: object.lat, 
                            lon: object.lon, 
                          },
                          name: object.tags.name ? object.tags.name : 'Nom inconnu',
                          information: capitalizeCategory,
                        });
                    }}
                  >
                    Ajoutez au carnet
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
            const category = object.tags.amenity || object.tags.leisure || object.tags.sport;
            const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
            return (
              <Marker key={object.id} position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{capitalizeCategory}</h4>
                  <button
                    type="submit"
                    onClick={() => {
                      handleAddNewActivity(
                        {
                          location: 
                          {
                            lat: object.lat, 
                            lon: object.lon, 
                          },
                          name: object.tags.name ? object.tags.name : 'Nom inconnu',
                          information: capitalizeCategory,
                        });
                    }}
                  >
                    Ajoutez au carnet
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
            const category = object.tags.amenity || object.tags.tourism || object.tags.leisure || object.tags.sport || object.tags.shop || object.tags.historic;
            const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
            return (
              <Marker key={object.id} position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{capitalizeCategory}</h4>
                  <button
                    type="submit"
                    onClick={() => {
                      handleAddNewActivity(
                        {
                          location: 
                          {
                            lat: object.lat, 
                            lon: object.lon, 
                          },
                          name: object.tags.name ? object.tags.name : 'Nom inconnu',
                          information: capitalizeCategory,
                        });
                    }}
                  >
                    Ajoutez au carnet
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
            const category = object.tags.amenity || object.tags.tourism || object.tags.leisure || object.tags.sport || object.tags.shop || object.tags.historic;
            const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
            return (
              <Marker key={object.id} position={cordinatesPOI}>
                <Popup>
                  <h3>{tags.name}</h3>
                  <h4>{capitalizeCategory}</h4>
                  <button
                    type="submit"
                    onClick={() => {
                      handleAddNewActivity(
                        {
                          location: 
                          {
                            lat: object.lat, 
                            lon: object.lon, 
                          },
                          name: object.tags.name ? object.tags.name : 'Nom inconnu',
                          information: capitalizeCategory,
                        });
                    }}
                  >
                    Ajoutez au carnet
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
)};

const Activity = ({ 
  handleAddNewActivity, object, 
}) => {


  const category = object.tags.amenity || object.tags.tourism || object.tags.leisure || object.tags.sport || object.tags.shop || object.tags.historic;
  const capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1)
  return (
  <Card fluid>
    <Card.Content>
      <Feed>
        <Feed.Event>
            <Button
              icon
              onClick={(evt) => {
                handleAddNewActivity(
                  {
                    location: 
                    {
                      lat: object.lat, 
                      lon: object.lon, 
                    },
                    name: object.tags.name ? object.tags.name : 'Nom inconnu',
                    information: capitalizeCategory,
                  });
              }}
            >
              <Icon name="add to calendar" />
            </Button>
          <Feed.Content>
            <Feed.Summary>
              {object.tags.name ? object.tags.name : 'Nom inconnu'}
            </Feed.Summary>
            <Feed.Date content={capitalizeCategory} />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)};

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
  mytrips: PropTypes.arrayOf(PropTypes.object.isRequired),
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
