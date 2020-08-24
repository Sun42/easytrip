import React from 'react';
import { Icon, Step, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
// Styles
import './styles.scss';

const HomePage = () => (
  <div className="explications">
    <Step.Group widths={3}>
      <Step>
        <Icon name="globe" />
        <Step.Content>
          <Step.Title>Destination</Step.Title>
          <Step.Description>
            D'abord selectionnez votre destination...
          </Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon name="calendar alternate" />
        <Step.Content>
          <Step.Title>Dates</Step.Title>
          <Step.Description>
            ...ensuite selectionnez vos dates et vos préférences horaires...
          </Step.Description>
        </Step.Content>
      </Step>

      <Step>
        <Icon name="check circle" />
        <Step.Content>
          <Step.Title>Activités</Step.Title>
          <Step.Description>
            ...et enfin, dites nous quelles sont
            vos activités préférées et nous nous chargerons du reste !
          </Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>

    <Button animated >
    <NavLink activeClassName="active" to="/resultats">
      <Button.Content visible>C'est parti ! </Button.Content>
      <Button.Content hidden >
        <Icon name="plane" />
      </Button.Content>
      </NavLink>
    </Button>
  </div>
);

export default HomePage;
