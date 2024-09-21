import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container,Row,Col,Button,InputGroup,FormControl,ListGroup} from 'react-bootstrap'


function App() {
const [userInput, setUserInput]=useState('');
const[list, setList]=useState([]);


const addItem=()=>{

if(userInput)
{
  setList([...list,{id:Math.random(), value: userInput}])

  setUserInput('')
}

}



  return (
    <Container>
      <Row className="text-center mb-4" style={{ fontSize: "3rem", fontWeight: "bolder" }}>To-Do App</Row>

      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add item..."
              size="lg"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button variant="dark" onClick={addItem}>ADD</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {list.map((item, index) => (
              <ListGroup.Item
                key={item.id}
                variant="dark"
                action
                className="d-flex justify-content-between"
              >
                {item.value}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    
    </Container>
  );
}

export default App;