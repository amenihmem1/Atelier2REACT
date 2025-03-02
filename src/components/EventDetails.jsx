import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../assets/img1.webp"; // Exemple d'images
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";

const EventDetails = () => {
  const { eventName } = useParams(); // Récupère le nom de l'événement depuis l'URL
  const [eventDetails, setEventDetails] = useState(null);

  const events = [
    {
      name: "Festival international de Carthage",
      image: img1,
      price: 30,
      description: "Un événement culturel majeur à Carthage avec des spectacles de musique et de danse."
    },
    {
      name: "Festival de la médina de Tunis",
      image: img2,
      price: 15,
      description: "Festival animé par des artistes locaux et internationaux dans la médina historique de Tunis."
    },
    {
      name: "Journées cinématographiques de Carthage (JCC)",
      image: img3,
      price: 7,
      description: "Le plus grand événement cinématographique d'Afrique du Nord mettant en avant des films du monde entier."
    }
  ];

  useEffect(() => {
    const event = events.find((e) => e.name === eventName);
    setEventDetails(event);
  }, [eventName]);

  if (!eventDetails) {
    return <div>Loading...</div>; 
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Img variant="top" src={eventDetails.image} />
            <Card.Body>
              <Card.Title>{eventDetails.name}</Card.Title>
              <Card.Text>
                <strong>Description: </strong>{eventDetails.description}
              </Card.Text>
              <Card.Text>
                <strong>Price: </strong>{eventDetails.price} DT
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;