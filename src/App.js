import { useState } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import './App.css';
import SessionTable from './Component/SessionTable';
import { sessionData } from './sessionData';

function App() {
  const [items, setItems] = useState(sessionData);

  const onFilter = (val) => {
    const filteredItems = sessionData.filter(item => item.session_status === val);
    if (val) {
      setItems(filteredItems);
    } else {
      setItems(sessionData);
    }
  };

  return (
    <Container className="App">
      <h1>Session Details</h1>
      <Dropdown className='filter'>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          Filter By Status
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onFilter()}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => onFilter("Available")}>Available</Dropdown.Item>
          <Dropdown.Item onClick={() => onFilter("Completed")}>Completed</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <SessionTable items={items} />
    </Container>
  );
}

export default App;
