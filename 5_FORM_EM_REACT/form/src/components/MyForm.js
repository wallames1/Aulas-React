import './MyForm.css'
import {useState} from 'react'

function MyForm({user}) {
    //3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const [bio, setBio] = useState("")

    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Enviando o Form")
        console.log(name, email, bio, role)
        //7-limpar form
        setName("")
        setEmail("")
        setBio("")

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
            {/*8-text area*/}
            <label htmlFor="">
                <span>Bio:</span>
                <textarea name="bio" placeholder='descrição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            {/*9-input select*/}
            <label >
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setBio(e.target.value)}>
                    <option value="usuario">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                    <option value="cagueta">Cagueta</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm