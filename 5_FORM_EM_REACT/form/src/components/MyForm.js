import './MyForm.css'
import {useState} from 'react'

function MyForm() {
    //3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }


  return (
    <div>
        {/*1-criação de form*/}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="digite o seu nome" onChange={handleName}/>
            </div>
            {/*2-label envolvendo input*/}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder="Digite seu E-mail" onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm