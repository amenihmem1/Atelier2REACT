import PropTypes from "prop-types";
import { Card, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import soldOutImage from "../assets/soldout.png"; 

const Event = ({ name, image, price, numberOfTickets, numberOfParticipants, onBuy }) => {
  const [isLiked, setIsLiked] = useState(false); 
  const [bookingMessage, setBookingMessage] = useState(""); 

  const handleLikeClick = () => {
    setIsLiked(!isLiked); 
  };

  const handleBookClick = () => {
    if (numberOfTickets > 0) {
      onBuy();
      setBookingMessage("You have booked an event!");
      setTimeout(() => setBookingMessage(""), 2500);
    }
  };

  return (
    <div className="event">
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={numberOfTickets <= 0 ? soldOutImage : image} 
          alt={numberOfTickets <= 0 ? "Sold Out" : "Event Image"}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/eventDetails/${name}`} style={{ textDecoration: "underline", color: "black" }}>
              {name}
            </Link>
          </Card.Title>

          <p>Price: {price} </p>
          <p>Number of tickets:  {numberOfTickets}</p>
          <p>Number of participants: {numberOfParticipants}</p>

          {bookingMessage && <Alert variant="success">{bookingMessage}</Alert>}

          <Button 
            variant="primary" 
            onClick={handleBookClick} 
            disabled={numberOfTickets <= 0}
          >
            Book an event
          </Button>

          <Button
            variant={isLiked ? "danger" : "secondary"} 
            onClick={handleLikeClick}
            style={{
              marginTop: "10px",
              backgroundColor: isLiked ? "red" : "#87CEEB", 
              borderColor: isLiked ? "red" : "#87CEEB",
            }}
          >
            {isLiked ? "Dislike" : "Like"} 
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  numberOfTickets: PropTypes.number.isRequired,
  numberOfParticipants: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onBuy: PropTypes.func.isRequired,
};

export default Event;