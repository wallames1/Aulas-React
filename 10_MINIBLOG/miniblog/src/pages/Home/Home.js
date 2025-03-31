import styles from "./Home.module.css"

//hooks
import { useNavigate, Link } from "react-router-dom"
import {useState} from "react"

//components


const Home = () => {

  const [query, setQuerty] = useState("")
  const [posts] = useState ([ ])

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div className={styles.home}>
        <h1>Veja os nossos posts mais recentes</h1>
        <form className={styles.search_form} onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="ou busque por tags..." 
          onChange={(e) => setQuerty(e.target.value)} 
          />
          <button className="btn btn-dark">Pesquisar</button>
        </form>
        <div>
          <h1>Posts...</h1>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className="btn">Criar primeiro post</Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home