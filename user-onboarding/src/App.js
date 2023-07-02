import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import axios from 'axios';
import schema from './Components/schema';
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

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res)
        setUsers([...users, res.data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const submit = evt => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser)
  }

  const change = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <Form
        values={formValues}
        change={change}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <h4>{user.first_name} {user.last_name}</h4>
              <p>{user.email}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
