import styles from "./Register.module.css"

import {useState, useEffect} from 'react'

const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu Usuário e compartilhe sua história</p>
        <form action="">
          <label htmlFor="">
            <span>Nome:</span>
            <input 
            type="text"
            name="displayName"
            required
            placeholder="Nome do usauário"
             />
          </label>
          <label htmlFor="">
            <span>Email:</span>
            <input 
            type="email"
            name="email"
            required
            placeholder="E-mail do usauário"
             />
          </label>
          <label htmlFor="">
            <span>senha:</span>
            <input 
            type="password"
            name="password"
            required
            placeholder="insira sua senha"
             />
          </label>
          <label htmlFor="">
            <span>Confirmação de senha:</span>
            <input 
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirmar senha"
             />
          </label>
          <button  className="btn" type="submit">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register