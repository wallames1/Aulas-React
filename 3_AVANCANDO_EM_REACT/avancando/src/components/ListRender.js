import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["wallames", "lucas", "pedro"])
    const [users, setUsers] = useState([
        {name:"wallames", id:1, age:28},
        {name:"luiz", id:2, age:28},
        {name:"felipe", id:3, age:28},
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) =>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>

        <button onClick={deleteRandom}>DELETE RANDOM PLAYER</button>
    </div>
  )
}

export default ListRender