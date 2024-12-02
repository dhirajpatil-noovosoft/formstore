import React from 'react';
import './App.css';
import FormStore from "./stores/FormStore"
import Field from "./inputComponents/Field";
function App() {
    const  req = ["name", "address", "company"];
  return (
    <div className="App">
        <Field FormComponent={FormStore} req={req}/>
    </div>
  );
}

export default App;
