import React, { useEffect } from 'react';

export default function LoginPage(props) {
    const userData = { username: null, password: null };

    useEffect(() => handleInput.current.focus());// Focus on "name" input
    let handleInput = React.createRef();

    function submitUserInfo(user) {
        //upload data to server
        fetch('/createNewUser', {
            method: 'POST',
            credentials: 'include',// What does it do?
            headers: {
                Accept: 'application/json',// What does it do?
                'Content-Type': 'application/json'// What does it do?
            },
            body: JSON.stringify({ name: user.username, password: user.password })
        })

        props.setUser({ user });
        props.setIsNewClient(false);
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

    function fetchTest() {
        fetch('site', { method: 'POST' })
            .then(res => res.text()).then(res => console.log(res));
        return
    }

    return (
        <div>
            {fetchTest()}
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