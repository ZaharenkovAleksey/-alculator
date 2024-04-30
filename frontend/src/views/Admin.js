import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Admin.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function Admin() {
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setToken(localStorage.getItem('jwt'))

    if (token === null) {
      navigate('/admin')
    }
  }, [token, navigate])

  const addCalc = async () => {
    const nameCalc = document.getElementById('name').value
    const percent = document.getElementById('percent').value

    if (token !== null) {
      const api = 'http://127.0.0.1:9001/calculator/add'
      const calculator = {
        nameCalc,
        percent
      }
      const data = {
        token,
        calculator
      }

      await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((result) => result.json())
        .then((result) => {
          document.getElementById('message').innerText = result.message
        })
    }
  }


  return (
    <>
      <Header />
      <div className='Admin'>
        <p>Создать калькулятор:</p>
        <input id="name" type="text" placeholder="Имя калькулятора" />
        <input id="percent" type="number" placeholder="Процент кредита" />
        <button id="create" onClick={addCalc}>Создать</button>
        <p id='message'></p>
      </div>
      <Footer />
    </>
  );
}

export default Admin;