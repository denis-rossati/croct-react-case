import React, { useState } from 'react'

export default function LoginPage () {
  const [validPassword, setValidPassword] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const willEnableButton = () => {
    validEmail && validPassword ? setButtonDisabled(false) : setButtonDisabled(true)
  }

  const verifyEmail = ({ target: { value } }) => {
    const emailRegex = /[\w\S^0-9]@[\w\S^0-9].com/gm
    if (emailRegex.test(value)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }

    willEnableButton()
  }

  const verifyPassword = ({ target: { value } }) => {
    if (value.length > 5) {
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }

    willEnableButton()
  }

  return (
    <div>
      <input type="text" onChange={verifyEmail} placeholder="e-mail" />
      <input type="password"onChange={verifyPassword} placeholder="password" />
      <button type="submit" disabled={buttonDisabled} >Log in</button>
    </div>
  )
}
