import React, { useEffect } from 'react';
import { useState } from 'react';

export default function LoginPage(props) {
    const [loginAttempts, setLoginAttempts] = useState(1);
    const userData = { name: null, password: null };

    useEffect(() => handleInput.current.focus());// Focus on "name" input
    let handleInput = React.createRef();

    function submitUsername(enter) {
        if (enter.keyCode === 13) {
            userData.name = document.getElementById('inputedUsername').value;
            document.getElementById('inputedPassword').focus();
        }
    }

    function submitPassword(enter) {
        if (enter.keyCode === 13) {
            userData.password = document.getElementById('inputedPassword').value;
            userLogin(userData);
        }
    }

    function userLogin(userData) {
        fetch('./validateLoginUser', {
            method: 'POST',
            credentials: 'include',// What does it do?
            headers: {
                Accept: 'application/json',// What does it do?
                'Content-Type': 'application/json'// What does it do?
            },
            body: JSON.stringify({ name: userData.name, password: userData.password })
        }).then(res => res.text()).then(res => {
            if (res === "valid") {
                props.setUser({ userData });
                props.setIsLoggingIn(false);
                props.setIsNewUser(false);
            } else if (res === "wrongPassword") {
                alert(`Wrong password, login attempts: ${loginAttempts}`);
                setLoginAttempts(loginAttempts + 1);
            } else {
                alert(`User name not found, login attempts: ${loginAttempts}`);
                setLoginAttempts(loginAttempts + 1);
            }
        });

    }

    if (loginAttempts === 1) {
        return (
            <div>
                <div id='login'>
                    username
                        <input
                        key="first-login-input"
                        type='text'
                        id="inputedUsername"
                        ref={handleInput}
                        onKeyDown={(input) => submitUsername(input)} />
                    password
                    <input
                        key="first-login-password"
                        id='inputedPassword'
                        onKeyDown={(input) => submitPassword(input)} />
                    <button className='button' onClick={() => userLogin()}>
                        submit
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div id='login'>
                    username
                        <input
                        key={`login-after-attempt + ${loginAttempts}`}
                        defaultValue=""
                        type='text'
                        id="inputedUsername"
                        ref={handleInput}
                        onKeyDown={(input) => submitUsername(input)} />
                    password
                    <input
                        key={`password-after-attempt  + ${loginAttempts}`}
                        defaultValue=""
                        id='inputedPassword'
                        onKeyDown={(input) => submitPassword(input)} />
                    <button className='button' onClick={() => userLogin()}>
                        submit
                    </button>
                </div>
            </div>
        )
    }
}