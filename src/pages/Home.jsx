import { useState } from "react"
import UserForm from "../components/UserForm"
import UserList from "../components/UserList"
import { useUsersStorage } from "../hooks/LocalStorage"
import "../App.css"


export default function Home(){
  const [users, setUsers] = useUsersStorage()
  const [editingIndex, setEditingIndex] = useState(null)

  function addUser(user){
    setUsers(prevUsers => [...prevUsers, user])
  }

  function deleteUser(index){
    setUsers(prevUsers => prevUsers.filter((_, i) => i !== index))
  }

  function EditUser(index){
    setEditingIndex(index)
  }

  function upDateUser(upDateUser){
    setUsers(prev => prev.map((user, index)=>
      index === editingIndex ? upDateUser : user
      )
    )
    setEditingIndex(null)
  }

  return (
    <div className='app'>
      <h1>Cadastro de Usuários</h1>
      <UserForm onAddUser={addUser} onUpDateUser={upDateUser} userEditing={editingIndex !== null ? users[editingIndex] : null}/>
      <UserList users={users} onDeleteUser={deleteUser} onEditUser={EditUser} />
    </div>
  )
}