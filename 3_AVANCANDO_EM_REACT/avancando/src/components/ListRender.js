import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["wallames", "lucas", "pedro"])
    const [users] = useState([
        {name:"wallames", id:54, age:28},
        {name:"luiz", id:534, age:28},
        {name:"felipe", id:544, age:28},
    ]);
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
    </div>
  )
}

export default ListRender