import React from 'react';
// import {db} from './ConfigFirebase.jsx';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div>
                    <img
                        alt="logo"
                        src={require('../img/logoRed.png')}
                        className="logoEmail" />
                </div>
                <button>Iniciar Sesion</button>
                <button>Registarse</button>
                <button>Iniciar con Google</button>

            </div>
        )
    }

}
export default Login;