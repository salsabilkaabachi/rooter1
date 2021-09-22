import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Description = ({ films, match }) => {
  let produit = films.find(
    (el) => Number(el.id) === Number(match.params.id)
  );
  console.log(produit);
  console.log(match);
  return (
    <div>
      <Card
        style={{
          width: "50rem",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center", backgroundColor:"grey"
        }}
      >
        <iframe 
          title={produit.title}
          width="600"
          height="500"
          src={produit.trailer}
          frameBorder="0"
          allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
          allowFullScreen
        ></iframe>
        <Card.Body>
          <Card.Title>{produit.title}</Card.Title>
          <Card.Text>{produit.description}</Card.Text>
          <Link to="/MovieApp">
            {" "}
            <Button variant="primary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Description;

