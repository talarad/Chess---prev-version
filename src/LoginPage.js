import React, { useEffect } from 'react';

export default function LoginPage(props) {
    const userData = { username: null, password: null };

    useEffect(() => handleInput.current.focus());
    let handleInput = React.createRef();

    function submitUserInfo(user) {
        props.setUser({ user });
        props.setIsNewClient(false);
    }

    function submitUsername(enter) {
        if(enter.keyCode === 13) {
            userData.username = document.getElementById('inputedUsername').value;
            document.getElementById('inputedPassword').focus();
        }
    }

    function submitPassword(enter) {
        if(enter.keyCode === 13) {
            userData.password = document.getElementById('inputedPassword').value;
            submitUserInfo(userData);
        }
    }

    return (
        <div>
            <div id='login'>
                username
                    <input
                    type='text'
                    id="inputedUsername"
                    ref={handleInput}
                    onKeyDown={(input)=>submitUsername(input)} />

                password
                <input 
                id='inputedPassword'
                onKeyDown={(input)=> submitPassword(input)}/>

                <button className='button' onClick={() => submitUserInfo()}>
                    submit
                    </button>
            </div>
        </div>
    )
}