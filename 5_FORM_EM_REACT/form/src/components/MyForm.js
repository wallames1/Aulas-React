import './MyForm.css'
import {useState} from 'react'

function MyForm({user}) {
    //3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(name, email)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Enviando o Form")
        //7-limpar form
        setName("")
        setEmail("")

    }


  return (
    <div>
        {/*5-envio de form*/}
        {/*1-criação de form*/}
        <form onSubmit={handleSubmit }>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="digite o seu nome" onChange={handleName} value={name}/>
            </div>
            {/*2-label envolvendo input*/}
            <label>
                <span>E-mail:</span>
                {/*4-simplificaçao de manipulaçao de state*/}
                <input type="email" name="email" placeholder="Digite seu E-mail" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm