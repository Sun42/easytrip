import React from 'react';

import './styles.scss';

// semantic-ui
import { Button, Card, Image } from 'semantic-ui-react';

const Result = () => (
  <div className="result">
    <div className="result-list">

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
      </Card>

    </div>
    <div className="result-map">
      Je suis une carte
    </div>
  </div>
);

export default Result;
