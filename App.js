import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';

const people = [{
  name: 'John',
  age: 25,
  hairColor: 'brown',
},
{
  name: 'Helga',
  age: 30,
  hairColor: 'blond',
},
{
  name: 'Ola',
  age: 31,
  hairColor: 'black',
}];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color: 'red', fontSize: '96px'}}>Big red text</p>
        <Greeting name = "Vullnet" numberOfMessages = {9}/>
        <PeopleList people = {people} />
        <button onClick={() => alert('Hello!')}> Click Me!</button>
        <p>
          This is so cool!
        </p>
      
      </header>
    </div>
  );
}

export default App;
