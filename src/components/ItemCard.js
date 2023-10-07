import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const handleClick = (linkUrl) => {
  window.open(linkUrl, '_blank');
};

function ItemCard(props) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>

        {props.title && (
          <Button
            variant="primary"
            onClick={() => handleClick(props.link)}> READ
          </Button>)}
      </Card.Body>
    </Card>
  );
}

export default ItemCard;