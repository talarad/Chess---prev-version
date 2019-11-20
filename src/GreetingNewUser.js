import React, { useState } from 'react';
import CreateNewUserPage from './CreateNewUserPage';
import LoginPage from './LoginPage';

export default function GreetingNewUser(props) {
    const [isCreatingNewAccount, setIsCreatingNewAccount] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    function handleOnClick() {
        setIsCreatingNewAccount(true);
    }

    function handleOnClickLogin() {
        setIsLoggingIn(true);
    }

    if(isLoggingIn) {
        return <LoginPage setIsLoggingIn={setIsLoggingIn} setIsNewUser={props.setIsNewUser} setUser={props.setUser} />
    } else if (isCreatingNewAccount) {
        return <CreateNewUserPage setIsCreatingNewAccount={setIsCreatingNewAccount} setIsNewUser={props.setIsNewUser} setUser={props.setUser} />
    } else {
        return (
            <div>
                Hello new player!<br />
                Please login or create new account to continue.
                <button className='button' onClick={() => handleOnClickLogin()}>
                    login
                </button>
                <button className='button' onClick={() => handleOnClick()}>
                    create new account
                </button>
            </div>
        )
    }
}