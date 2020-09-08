import React from 'react';

// semantic-ui
import {
  Icon,/*@fixme no-unused-vars Step, */Button,
} from 'semantic-ui-react';

// Router
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';
import Video from '../../assets/homepageVideo.mp4';

const HomePage = () => (
  <div className="wrapper">
    <video autoPlay loop muted>
      <source src={Video} />
    </video>
    <Button animated>
      <Button.Content visible>EN ROUTE !</Button.Content>
      <Button.Content hidden>
        <Link to="/result">
          <Icon name="plane" size="huge" />
        </Link>
      </Button.Content>
    </Button>
  </div>
);

export default HomePage;
