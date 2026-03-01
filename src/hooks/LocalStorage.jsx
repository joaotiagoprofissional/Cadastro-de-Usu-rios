import { useEffect, useState } from "react"

export function useUsersStorage(){
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

  return [users, setUsers]
}