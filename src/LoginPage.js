import React, { useEffect } from 'react';

export default function LoginPage(props) {
    const userData = { name: null, password: null };

    useEffect(() => handleInput.current.focus());// Focus on "name" input
    let handleInput = React.createRef();

    function submitUsername(enter) {
        if (enter.keyCode === 13) {
            userData.username = document.getElementById('inputedUsername').value;
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
            method: 'POST' ,
            credentials: 'include',// What does it do?
            headers: {
                Accept: 'application/json',// What does it do?
                'Content-Type': 'application/json'// What does it do?
            },
            body: JSON.stringify({ name: userData.username, password: userData.password })
        }).then(res => res.text()).then(res => console.log(res));

        props.setUser({ userData });
        props.setIsLoggingIn(false);
    }

    return (
        <div>
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
                <button className='button' onClick={() => userLogin()}>
                    submit
                </button>
            </div>
        </div>
    )
}