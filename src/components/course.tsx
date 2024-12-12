import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


import { useNavigate } from "react-router-dom";

export default function AutoLayoutExample() {
  const navigate = useNavigate();

    const handleNavigation = () => {
      navigate("../components/mycourses.tsx");
    };
  return (
    
  
    <Container className='cont'  id="home">
     
    
      <Row  className="courses justify-content-md-center">
      <h1  >  available  Courses</h1>
      
        <Col xs={12} sm={6} md={4} lg={4}>
        <div>
        <Card style={{ width: '22rem',border: 'none' }}>
      <Card.Img variant="top" src="/oda.png" style={{ width: '22rem',  height:"17rem"}}/>
      <Card.Body>
        <Card.Title style={{ textAlign: 'left' }}> Learn Afaan Oromo</Card.Title>
            <Link to="../components/mycourses.tsx"><Button variant="primary"onClick={handleNavigation}>Start Learning </Button></Link>
            
        
      </Card.Body>
    </Card>
    </div>
        </Col>
       
        <Col xs={12} sm={6} md={4} lg={4}> 
        <div>
        <Card style={{ width: '22rem',border: 'none' }}>
      <Card.Img variant="top" src="/lalibela.png" style={{ width: '22rem',  height:"17rem"}}/>
      <Card.Body>
        <Card.Title style={{ textAlign: 'left' }} > Learn Amarigna</Card.Title>
        <Link to="../components/ucourse.tsx"><Button variant="primary"onClick={handleNavigation}>Start Learning </Button></Link>
      </Card.Body>
    </Card>
    </div>
    </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
        <div>
        <Card style={{ width: '22rem',border: 'none' }}>
      <Card.Img variant="top" src="/aksum.png" style={{ width: '22rem',  height:"17rem"}}/>
      <Card.Body>
        <Card.Title style={{ textAlign: 'left' }}> Learn Tigrigna </Card.Title>
        <Link to="../components/ucourse.tsx"><Button variant="primary"onClick={handleNavigation}>Start Learning </Button></Link>
      </Card.Body>
    </Card>
    </div>
        </Col>
      
        
      </Row>
     </Container> 

  );
}

