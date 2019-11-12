import React, { useState } from 'react';
import LoginPage from './LoginPage';

export default function GreetingNewUser(props) {
    const [isCreatingNewAccount, setisCreatingNewAccount] = useState(false);

    function handleOnClick() {
        setisCreatingNewAccount(true);
    }

    if(isCreatingNewAccount) {
        return <LoginPage setIsNewClient={props.setIsNewClient} setUser={props.setUser}/>
    } else {
        return (
            <div>
                Hello new player!
                Please login or create new account to continue.
                    <button className='button'>
                        login
                    </button>
                    <div>
                        <button className='button' onClick={() => handleOnClick()}>
                            create new account
                        </button>
                    </div>
            </div>
        )
    }
}