import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../services/api';
import { eventSchema } from '../schemas/eventSchema';
import { z } from 'zod';

const AddEvent = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: '',
    price: '',
    tickets: '',
    description: '',
    image: '',
    participants: 0,
    isLiked: false
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation avec Zod
      const validatedData = eventSchema.parse({
        ...event,
        price: Number(event.price),
        tickets: Number(event.tickets)
      });
      
      // Appel à l'API pour ajouter l'événement
      await addEvent(validatedData);
      navigate('/events'); // Redirection vers la liste des événements
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Erreur de validation
        setError(error.errors.map(e => e.message).join(", "));
      } else if (error.response) {
        // Erreur provenant de l'API (par exemple 400, 500)
        setError(`Erreur API: ${error.response.data.message || "Erreur inconnue"}`);
      } else {
        // Autres erreurs
        setError("Erreur lors de l'ajout de l'événement");
      }
    }
  };

  return (
    <Container className="mt-4">
      <h2>Ajouter un événement</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Prix</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={event.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tickets disponibles</Form.Label>
          <Form.Control
            type="number"
            name="tickets"
            value={event.tickets}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>URL de l'image</Form.Label>
          <Form.Control
            type="url"
            name="image"
            value={event.image}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajouter l'événement
        </Button>
      </Form>
    </Container>
  );
};

export default AddEvent;
