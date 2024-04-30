import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('jwt') !== null) {
      setIsLogin(true)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('jwt')
    setIsLogin(false)
    navigate('/')
  }

  const LogoutButton = () => {
    if (isLogin === true) {
      return (
        <div className='LogoutButton'>
          <button onClick={logout}>Выход</button>
        </div>
      )
    }
  }

  return (
    <div className='Header'>
        <Link className="HeaderLink" to="/">Калькуляторы</Link>
        <Link className="HeaderLink" to="/Admin">Админ-панель</Link>
        <LogoutButton />
        <img width="35px" src="https://www.tadviser.ru/images/5/5c/Альфа-Банк_ЛОГО.gif"></img>
      
    </div>
  );

}

export default Header;