import React from 'react';
import { Card } from 'react-bootstrap';
import landscape from '../../assets/landscape.jpeg';
import "../../App.css";
import LikeButton from '../button/Index';

const Home = props => {

  return (
    <section className="wrapper">
      <main className="main__container">
        <Card>
          <Card.Img variant="top" src={landscape} />
          <Card.Body>
            <Card.Title>Awesome Landscape</Card.Title>
            <Card.Text>
              Click the like button to like this card
            </Card.Text>
            <LikeButton id="1234" />
          </Card.Body>
        </Card>
      </main>
    </section>
  )
}

export default Home;