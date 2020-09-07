import React from 'react';
import PropTypes from 'prop-types';

// Styles and react-icons
import './styles.scss';
import {IconContext} from "react-icons";
import { MdAddLocation } from 'react-icons/md';

// semantic-ui
import {
  Item, Icon,
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
  handleAddNewActivity, newActivityAddedBool, newActivityAddedInfo, 
  newCarnetCreated, mytrips,
  foodFilter, artFilter, pubFilter, excursionFilter, shopFilter,
  acquaticFilter, funFilter, historicFilter,
  foodCheck, artCheck, pubCheck, excursionCheck, shopCheck, acquaticCheck,
  funCheck, historicCheck,
  handleClosePopUp,
}) => {

  return (
  <div className="result">
    <div className="result-list">

    {/* POP UP new activity added */}
      {
      newActivityAddedBool === true 
      &&
      <div className="popup">
        <p>L'activité "{newActivityAddedInfo.name}" a été ajouté à votre carnet de voyage</p>
        <button
          onClick={() => {
            handleClosePopUp();
          }}
        >X</button>
      </div>
      }
    {/* POP UP new carnet added */}
      {
      newCarnetCreated === true 
      &&
      <div className="popup">
        <p>Votre nouveau carnet a été créé</p>
        <button
          onClick={() => {
            handleClosePopUp();
          }}
        >X</button>
      </div>
      }
    {/* Explanation boxes / steps + condition */}
      {!foodCheck && !artCheck && !pubCheck && !excursionCheck && !shopCheck && !acquaticCheck && !funCheck && !historicCheck && !newCarnetCreated &&
        <div className="explications">
        <div className="box1">
          <Icon size="big" name="check circle"/>
          <h3>Carnet</h3>
          <p>D'abord, sélectionnez ou créez votre carnet de voyage...</p>
        </div>
        <div className="box2">
          <Icon size="big" name="globe" />
          <h3>Destination</h3>
          <p>Sélectionnez ensuite la destination de votre choix</p>
        </div>
        <div className="box3">
          <Icon size="big" name="check circle"/>
          <h3>Activités</h3>
          <p>Enfin, dites nous quelles sont
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

  <div className="activity">
    <div className="activity-button--add">
      <button
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
        <IconContext.Provider
          value={{ color: 'black', size: '40px', background: 'white' }}
        >
          <div>
            <MdAddLocation />
          </div>
        </IconContext.Provider>
      </button>
    </div>
    <div className="activity-info-wrapper">
      <div className="activity-title">
        <h3>{object.tags.name ? object.tags.name : 'Nom inconnu'}</h3>
      </div>
      <div className="activity-amenities">
        <p>{capitalizeCategory}</p>
      </div>
      <div className="activity-details">
        <div className="activity-details-address">
          <p>{object.tags['addr:city']} {object.tags['addr:postcode']}</p>
          <p>{object.tags['addr:street']}</p>
          <p>{object.tags.phone}</p>
          <p><a href="mailto:{object.tags['contact:email']}">{object.tags['contact:email']}</a></p>
          <p><a href="http://{object.tags.website}">{object.tags.website}</a></p>
        </div>
        <div className="activity-details-services">
          {object.tags.cuisine && <p>Type de cusine : {object.tags.cuisine}</p>}
          {object.tags.delivery && <p>Livraison : {object.tags.delivery}</p>}
          {object.tags.takeaway&& <p>A emporter : {object.tags.takeaway}</p>}
          {object.tags.outdoor_seating && <p>Terrasse : {object.tags.outdoor_seating}</p>}
        </div>
      </div>
    </div>
  </div>
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
  handleAddNewActivityBool: PropTypes.func,
  newActivityAddedBool: PropTypes.bool,
  newActivityAddedInfo: PropTypes.object,
  handleClosePopUp: PropTypes.func,
  newCarnetCreated: PropTypes.bool,
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
