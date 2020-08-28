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

import FiltersBar from '../FiltersBar';

const Result = ({ cordinates, name }) => (
  <div className="result">
    <FiltersBar />
    <div className="result-list">
      <Item.Group divided>
        <Item>
          <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
          <Item.Content>
            <h3>Randonnée entre plages et falaises</h3>
            <Item.Meta>
              <span className="cinema">Etretat</span>
            </Item.Meta>
            <Item.Description>Romantique théâtre ouvert sur la Manche,
              Étretat a inspiré les plus illustres artistes.
            </Item.Description>
            <Item.Extra>
              <Button>Plus d'info</Button>
              <Button>Carnet de voyage</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
          <Item.Content>
            <h3>Randonnée entre plages et falaises</h3>
            <Item.Meta>
              <span className="cinema">Etretat</span>
            </Item.Meta>
            <Item.Description>Romantique théâtre ouvert sur la Manche,
              Étretat a inspiré les plus illustres artistes.
            </Item.Description>
            <Item.Extra>
              <Button>Plus d'info</Button>
              <Button>Carnet de voyage</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
          <Item.Content>
            <h3>Randonnée entre plages et falaises</h3>
            <Item.Meta>
              <span className="cinema">Etretat</span>
            </Item.Meta>
            <Item.Description>Romantique théâtre ouvert sur la Manche,
              Étretat a inspiré les plus illustres artistes.
            </Item.Description>
            <Item.Extra>
              <Button>Plus d'info</Button>
              <Button>Carnet de voyage</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
          <Item.Content>
            <h3>Randonnée entre plages et falaises</h3>
            <Item.Meta>
              <span className="cinema">Etretat</span>
            </Item.Meta>
            <Item.Description>Romantique théâtre ouvert sur la Manche,
              Étretat a inspiré les plus illustres artistes.
            </Item.Description>
            <Item.Extra>
              <Button>Plus d'info</Button>
              <Button>Carnet de voyage</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
          <Item.Content>
            <h3>Randonnée entre plages et falaises</h3>
            <Item.Meta>
              <span className="cinema">Etretat</span>
            </Item.Meta>
            <Item.Description>Romantique théâtre ouvert sur la Manche,
              Étretat a inspiré les plus illustres artistes.
            </Item.Description>
            <Item.Extra>
              <Button>Plus d'info</Button>
              <Button>Carnet de voyage</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
          <Item.Content>
            <h3>Randonnée entre plages et falaises</h3>
            <Item.Meta>
              <span className="cinema">Etretat</span>
            </Item.Meta>
            <Item.Description>Romantique théâtre ouvert sur la Manche,
              Étretat a inspiré les plus illustres artistes.
            </Item.Description>
            <Item.Extra>
              <Button>Plus d'info</Button>
              <Button>Carnet de voyage</Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
          <Item.Content>
            <h3>Randonnée entre plages et falaises</h3>
            <Item.Meta>
              <span className="cinema">Etretat</span>
            </Item.Meta>
            <Item.Description>Romantique théâtre ouvert sur la Manche,
              Étretat a inspiré les plus illustres artistes.
            </Item.Description>
            <Item.Extra>
              <Button>Plus d'info</Button>
              <Button>Carnet de voyage</Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>

    <div className="result-map">
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
    </div>
  </div>
);

Result.propTypes = {
  cordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Result;
