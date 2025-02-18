import { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";

const Events = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  const [eventData, setEventData] = useState([
    {
      image: img1,
      name: "Festival international de Carthage",
      price: 30,
      numberOfTickets: 10,
      numberOfParticipants: 10,
    },
    {
      image: img2,
      name: "Festival de la médina de Tunis",
      price: 15,
      numberOfTickets: 4,
      numberOfParticipants: 30,
    },
    {
      image: img3,
      name: "Journées cinématographiques de Carthage (JCC)",
      price: 7,
      numberOfTickets: 20,
      numberOfParticipants: 35,
    },
  ]);

const handleBuy = (index) => {
  setEventData((prevData) => {
    const updatedEvents = [...prevData];
    const event = { ...updatedEvents[index] }; 

    console.log("Before update:", event.numberOfTickets, event.numberOfParticipants);

    if (event.numberOfTickets > 0) {
      event.numberOfTickets -= 1;  
      event.numberOfParticipants += 1; 
    }
    updatedEvents[index] = event;  
    console.log("After update:", event.numberOfTickets, event.numberOfParticipants);

    return updatedEvents;
  });
};



  useEffect(() => {
    setShowWelcomeMessage(true);
  }, []); 

  return (
    <Container>
      {showWelcomeMessage && (
        <Alert variant="success" onClose={() => setShowWelcomeMessage(false)} dismissible>
          Hey welcome to Esprim Events 
        </Alert>
      )}

      <Row>
        {eventData.map((event, index) => (
          <Col key={index} md={4}>
            <Event 
              {...event} 
              onBuy={() => handleBuy(index)} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
