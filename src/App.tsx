import React, { FunctionComponent, useState } from 'react';
import { render } from 'react-dom';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

const App = () => {
  const [name, setName] = useState('');

  return (
    <React.Fragment>
      <div>Type your name: </div>
      <input
        type="text"
        name="name"
        value={name}
        autoComplete="off"
        onChange={event => setName(event.target.value)}
      />
      <FunctionalComponent name={name} />
      <ClassComponent name={name} />
    </React.Fragment>
  );
};

render(<App />, document.getElementById('root'));
