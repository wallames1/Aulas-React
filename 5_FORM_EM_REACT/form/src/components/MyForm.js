import './MyForm.css'

function MyForm() {
  return (
    <div>
        {/*1-criação de form*/}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="digite o seu nome"/>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm