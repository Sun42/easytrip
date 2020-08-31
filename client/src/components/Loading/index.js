import React from 'react';
import './styles.scss';
import {
  Segment, Loader, Image,
} from 'semantic-ui-react';
import Logo from '../../assets/newLogo.PNG';

const Loading = () => (
  <Segment>
    <Loader size="big" active inline="centered">Chargement en cours...</Loader>
    <Image src={Logo} />
  </Segment>
);

export default Loading;
