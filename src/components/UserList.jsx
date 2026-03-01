export default function UserList({ users, onDeleteUser, onEditUser }){

    return(      
        <div className='usuarios'>
            {users.map((user, index)=>(
                <div key={index}>
                <p>Nome: {user.name}</p>
                <p>E-mail: {user.email}</p>
                <p>Idade: {user.age}</p>

                <button onClick={()=> onEditUser(index)} >Editar</button>
                <button onClick={()=> onDeleteUser(index)} >Excluir</button>
                <hr/>
                </div>
            ))}
        </div>
    )

}