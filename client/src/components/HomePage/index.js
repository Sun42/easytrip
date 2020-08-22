import React from 'react';

// semantic-ui
import {
  Icon, Step, Button,
} from 'semantic-ui-react';

// Router
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

const HomePage = () => (
  <div className="wrapper">
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src="/client/src/assets/homepageVideo.mp4" type="video/mp4" />
      </video>
    </div>
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

      <Button animated>
        <Button.Content visible>C'est parti !</Button.Content>
        <Button.Content hidden>
          <Link to="/result">
            <Icon name="plane" />
          </Link>
        </Button.Content>
      </Button>
    </div>
  </div>
);

export default HomePage;
