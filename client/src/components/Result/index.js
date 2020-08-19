import React from 'react';

import './styles.scss';

// semantic-ui
import { Button, Card, Icon, Image, Item, Label } from 'semantic-ui-react';

const Result = () => (
  <div className="result">
    <div className="result-list">

    <Item.Group divided>
    <Item>
      <Item.Image src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" />
      <Item.Content>
        <h3>Randonnée entre plages et falaises</h3>
        <Item.Meta>
          <span className='cinema'>Etretat</span>
        </Item.Meta>
        <Item.Description>Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.</Item.Description>
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
          <span className='cinema'>Etretat</span>
        </Item.Meta>
        <Item.Description>Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.</Item.Description>
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
          <span className='cinema'>Etretat</span>
        </Item.Meta>
        <Item.Description>Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.
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
          <span className='cinema'>Etretat</span>
        </Item.Meta>
        <Item.Description>Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.</Item.Description>
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
          <span className='cinema'>Etretat</span>
        </Item.Meta>
        <Item.Description>Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.</Item.Description>
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
          <span className='cinema'>Etretat</span>
        </Item.Meta>
        <Item.Description>Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.</Item.Description>
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
          <span className='cinema'>Etretat</span>
        </Item.Meta>
        <Item.Description>Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.</Item.Description>
        <Item.Extra>
          <Button>Plus d'info</Button>
          <Button>Carnet de voyage</Button>
        </Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
  

      {/* <Card fluid>
        <Card.Content>
          <Card.Header>Etretat</Card.Header>
          <Image
            src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg"
          />
          <Card.Description>
            Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Ajoutez au favoris
            </Button>
            <Button basic color='red'>
              Ajouter au carnet de voyage
            </Button>
          </div>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Etretat</Card.Header>
          <Image
            src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg"
          />
          <Card.Description>
            Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Ajoutez au favoris
            </Button>
            <Button basic color='red'>
              Ajouter au carnet de voyage
            </Button>
          </div>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Etretat</Card.Header>
          <Image
            src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg"
          />
          <Card.Description>
            Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Ajoutez au favoris
            </Button>
            <Button basic color='red'>
              Ajouter au carnet de voyage
            </Button>
          </div>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Etretat</Card.Header>
          <Image
            src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg"
          />
          <Card.Description>
            Romantique théâtre ouvert sur la Manche, Étretat a inspiré les plus illustres artistes.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Ajoutez au favoris
            </Button>
            <Button basic color='red'>
              Ajouter au carnet de voyage
            </Button>
          </div>
        </Card.Content>
      </Card> */}

    </div>
    <div className="result-map">
      Je suis une carte
    </div>
  </div>
);

export default Result;
