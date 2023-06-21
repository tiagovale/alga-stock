import React, { useState } from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container/Container';
import Input from '../../shared/Input';

function TestComponent (){
  return <img  width='50px' src='https://cdn.vectorstock.com/i/1000x1000/69/26/search-icon-magnifying-glass-vector-23086926.webp'></img>;
}
const [street, setStreet] = useState('');

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
        <Container>
          <Button 
            onClick={()=>{window.alert('asddasdsa')}}
            appendIcon={<TestComponent/>}
            >
              Potato
          </Button>

          <Input
            label='Street'
            placeholder="E.g: 15th avenue"
            value={street}
            onChange={(e)=>{setStreet(e.target.value)}}
          />

        </Container>
      </div>
  );
}

export default App;
