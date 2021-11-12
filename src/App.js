import React from 'react';
import Select from 'react-select';
import './App.css';

const options = [
  { value : 'Choose your language', label: 'Choose your language'},
  { value : 'C++', label: 'C++'},
  { value : 'JAVA', label: 'JAVA'},
  { value : 'Javascript', label: 'Javascript'},
  { value : 'Python', label: 'Python'},
  { value : 'Swift', label: 'Swift'},
];

function App(props) {
  return (
    <div>
      <p>Default value for my select</p>

      <Select
        value={options.value}
        options={options}
        defaultValue={options[0]}
      />
    </div>
  );
}

export default App;
