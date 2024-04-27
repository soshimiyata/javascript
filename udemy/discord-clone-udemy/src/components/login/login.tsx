import React from 'react'
import "./login.scss"
import { Button } from "@mui/material"
import { signInWithPopup } from 'firebase/auth'
import { auth, provaider } from '../../firebase'

const login = () => {

  const signIn = () => {
    signInWithPopup(auth, provaider).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>
      <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default login