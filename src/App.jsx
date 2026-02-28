import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const savedUsers = localStorage.getItem('usuarios')
    if(savedUsers){
      setUsers(JSON.parse(savedUsers))
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('usuarios', JSON.stringify(users))
  }, [users])


  function handleSubmit(e){
    e.preventDefault()

    setUsers(prevUsers => [
      ...prevUsers,
      {name, email, age}
    ])

    setName('')
    setEmail('')
    setAge('')
  }

  return (
    <div className='app'>
      <h1>Cadastro de Usuários</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Nome' type='text' value={name} onChange={e => setName(e.target.value)} required></input>
        <input placeholder='E-mail' type='email' value={email} onChange={e => setEmail(e.target.value)} required></input>
        <input placeholder='Idade' type='number' value={age} onChange={e => setAge(e.target.value)} required></input>
        <button type='submit'>Cadastrar</button>
      </form>
      <div className='usuarios'>
        {users.map((user, index)=>(
          <div key={index}>
            <p>Nome: {user.name}</p>
            <p>E-mail: {user.email}</p>
            <p>Idade: {user.age}</p>
            <hr/>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default App
