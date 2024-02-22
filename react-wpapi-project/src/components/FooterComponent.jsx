import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FooterComponent() {

  return (
    <Card className="text-center position-absolute w-100">
      <Card.Body>
        <div className='d-flex gap-2 justify-content-center'>
          <Button variant="primary"><i className="bi bi-facebook"></i></Button>
          <Button variant="primary"><i className="bi bi-twitter-x"></i></Button>
          <Button variant="primary"><i className="bi bi-whatsapp"></i></Button>
          <Button variant="primary"><i className="bi bi-instagram"></i></Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted"> © - Anna </Card.Footer>
    </Card>
  );
}

