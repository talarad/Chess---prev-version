import React, { useEffect } from 'react';

export default function LoginPage(props) {
    const userData = { username: null, password: null };
    console.log(props);
    useEffect(() => handleInput.current.focus());// Focus on "name" input
    let handleInput = React.createRef();

    function submitUserInfo(user) {
        //upload data to server
        fetch('/createNewUser', {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: user.username, password: user.password })
        })

        props.setIsNewUser(false);
        props.setIsCreatingNewAccount(false);
        props.setUser({ user });
    }

    function submitUsername(enter) {
        if (enter.keyCode === 13) {
            userData.username = document.getElementById('inputedUsername').value;
            document.getElementById('inputedPassword').focus();
        }
    }

    function submitPassword(enter) {
        if (enter.keyCode === 13) {
            userData.password = document.getElementById('inputedPassword').value;
            submitUserInfo(userData);
        }
    }

    return (
        <div>
            {console.log('in CreateNewUserPage')}
            <div id='login'>
                username
                    <input
                    type='text'
                    id="inputedUsername"
                    ref={handleInput}
                    onKeyDown={(input) => submitUsername(input)} />
                password
                <input
                    id='inputedPassword'
                    onKeyDown={(input) => submitPassword(input)} />
                <button className='button' onClick={() => submitUserInfo()}>
                    submit
                </button>
            </div>
        </div>
    )
}