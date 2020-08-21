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
// import { Icon } from "leaflet";

const Result = ({newMap}) => (
  <div className="result">
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
              Étretat a inspiré les plus illustres artistes.</Item.Description>
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
              Étretat a inspiré les plus illustres artistes.</Item.Description>
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
              Étretat a inspiré les plus illustres artistes.</Item.Description>
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
              Étretat a inspiré les plus illustres artistes.</Item.Description>
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
        center={[45.4, -75.7]} 
        zoom={12}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[45.4, -75.7]}>
          <Popup>
            <h3>Etretat</h3>
              <p><Link to={'/amenity'}>Plus d'info</Link></p>
              <p><Link to={'/carnet-de-voyage'}>Ajoutez au carnet de voyage</Link></p>
          </Popup>
        </Marker>
      </Map>
    </div>
  </div>
);

Result.propTypes = {
  newMap: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Result;
