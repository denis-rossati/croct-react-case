import React, { useState, useCallback } from 'react';
import { useCroct } from '@croct/plug-react';
import { Redirect } from 'react-router-dom';

export default function LoginPage() {
  const croct = useCroct();
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const willEnableButton = () => (validEmail && validPassword
    ? setButtonDisabled(false)
    : setButtonDisabled(true));

  const verifyEmail = ({ target: { value } }) => {
    // I will keep the regex very simple (and insecure, I know) just this time XD
    const emailRegex = /[\w\S]+@[\w\S]+.com/gm;
    if (emailRegex.test(value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    return willEnableButton();
  };

  const verifyPassword = ({ target: { value } }) => {
    if (value.length >= 5) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    return willEnableButton();
  };

  const setPersona = useCallback(
    () => croct.user.edit().set('email', validEmail).save(),
  );

  const redirectToMainPage = (evt) => {
    evt.preventDefault();
    setPersona();
    return setShouldRedirect(true);
  };

  return (
    <div>
      <input type="text" onChange={verifyEmail} placeholder="e-mail" />
      <input type="password" onChange={verifyPassword} placeholder="password" />
      <button type="submit" onClick={redirectToMainPage} disabled={buttonDisabled}>Log in</button>
      { shouldRedirect && <Redirect to="/main-page" /> }
    </div>
  );
}
