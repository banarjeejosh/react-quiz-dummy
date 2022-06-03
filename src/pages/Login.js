import React from 'react'
import Illustration from "../components/Illustration";
import LoginForm from "../components/LoginForm";
const login = ({props}) => {
  const users = props.users
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <LoginForm users={users} />
      </div>
    </>
  )
}

export default login

