import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import axios from 'axios';
import * as yup from 'yup';


const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false,
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: '',
}
const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const submit = evt => {
  }

  const change = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }


  return (
    <div className="App">
      <Form
        values={formValues}
        change={change}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
