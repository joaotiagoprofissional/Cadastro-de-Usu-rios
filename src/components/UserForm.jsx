import { useState, useEffect } from "react";

export default function UserForm({ onAddUser, userEditing, onUpDateUser }){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  useEffect(()=>{
    if(userEditing){
      setName(userEditing.name)
      setEmail(userEditing.email)
      setAge(userEditing.age)
    }
  }, [userEditing])

  function handleSubmit(e){
    e.preventDefault()

    if(userEditing){
      onUpDateUser({ name, email, age })
    }else{
      onAddUser({ name, email, age })
    }

    setName('')
    setEmail('')
    setAge('')
  }

  return(
    <form onSubmit={handleSubmit}>
        <input placeholder='Nome' type='text' value={name} onChange={e => setName(e.target.value)} required></input>
        <input placeholder='E-mail' type='email' value={email} onChange={e => setEmail(e.target.value)} required></input>
        <input placeholder='Idade' type='number' value={age} onChange={e => setAge(e.target.value)} required></input>
        <button type='submit'>{userEditing ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
)
}