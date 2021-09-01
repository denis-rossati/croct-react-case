import React, { useState } from 'react'

export default function LoginPage () {
  const [validPassword, setValidPassword] = useState()
  const [validEmail, setValidEmail] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const verifyEmail = ({ target }) => {
    const emailRegex = /[\w\S^0-9]@[\w\S^0-9].com/gm
    if (emailRegex.test(target.value)) {
      return setButtonDisabled(true)
    }
  }

  return (
    <div>
      <input type="text" onChange={verifyEmail} placeholder="e-mail" />
      <input type="password" placeholder="password" />
      <button type="submit" disabled={buttonDisabled} >Log in</button>
    </div>
  )
}
