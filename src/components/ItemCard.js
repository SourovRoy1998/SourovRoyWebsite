import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard(props) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={props.source} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;