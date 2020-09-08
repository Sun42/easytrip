import React from 'react';
import PropTypes from 'prop-types';

// Styles and react-icons
import './styles.scss';

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
  handleAddNewActivity, 
  newCarnetCreated, mytrips,
  foodFilter, artFilter, pubFilter, excursionFilter, shopFilter,
  acquaticFilter, funFilter, historicFilter,
  foodCheck, artCheck, pubCheck, excursionCheck, shopCheck, acquaticCheck,
  funCheck, historicCheck,
}) => {

  return (
  <div className="result">
    <div className="result-list">

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
        <Icon name="add" size="big" />
      </button>
    </div>
    <div className="activity-info-wrapper">
      <div className="activity-title">
        <h4>{object.tags.name ? object.tags.name : 'Nom inconnu'}</h4>
        <p>{capitalizeCategory}</p>
      </div>
      <div className="activity-details">
        <div className="activity-details-address">
          <p>{object.tags['addr:city']} {object.tags['addr:postcode']}</p>
          <p>{object.tags['opening_hours']}</p>
          <p>{object.tags.phone}</p>
          <p>{object.tags['addr:city']} {object.tags['addr:postcode']}</p>
          <p><a href="mailto:{object.tags['contact:email']}">{object.tags['contact:email']}</a></p>
          <p><a href="http://{object.tags.website}">{object.tags.website}</a></p>
        </div>
        <div className="activity-details-services">
          {/* Tags for FOOD */}
          {object.tags.cuisine && <p>Type de cusine : {object.tags.cuisine}</p>}
          {object.tags.delivery && <p>Plat végétarien : {object.tags['diet:vegetarian']}</p>}
          {object.tags.delivery && <p>Livraison : {object.tags.delivery}</p>}
          {object.tags.takeaway&& <p>A emporter : {object.tags.takeaway}</p>}
          {object.tags.outdoor_seating && <p>Terrasse : {object.tags.outdoor_seating}</p>}
          {/* Tags for ART */}
          {/* {object.tags.name && <p>Nom : {object.tags.name}</p>} */}
          {object.tags.artist_name && <p>Artiste : {object.tags.artist_name}</p>}
          {object.tags.artwork_type && <p>Domaine : {object.tags.artwork_type}</p>}
          {/* {object.tags.start_date && <p>Année : {object.tags.start_date}</p>} */}
          {/* Tags for PUB */}
          {object.tags.smoking && <p>Fumoir : {object.tags.smoking}</p>}
          {object.tags.brewery && <p>Bières : {object.tags.brewery}</p>}
          {/* Tags for EXCURSION = already DONE in the upper part */}
          {/* Tags for SHOP */}
          {object.tags.shop && <p>Type : {object.tags.shop}</p>}
          {/* Tags for ACQUATIC */}
          {object.tags['bath:type'] && <p>Type : {object.tags['bath:type']}</p>}
          {object.tags.leisure && <p>Service : {object.tags.leisure}</p>}
          {/* Tags for FUN */}
          {object.tags['payment:cb'] && <p>Paiement CB : {object.tags['payment:cb']}</p>}
          {/* Tags for HISTORIC */}
          {object.tags['mhs:inscription_date'] && <p>Date d'inscription aux monuments historiques : {object.tags['mhs:inscription_date']}</p>}
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
