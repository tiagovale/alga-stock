import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container/Container';

function TestComponent (){
  return <img  width='50px' src='https://cdn.vectorstock.com/i/1000x1000/69/26/search-icon-magnifying-glass-vector-23086926.webp'></img>;
}

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
        </Container>
        </div>
  );
}

export default App;
