import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
}

handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
}

handleChange = event => {
    event.preventDefault();

    const { value, name } = event.target;
    
    this.setState({[name]: value})
}

render() {
    return(
        <div className='sign-in'>
            <h2>Ya tengo una cuenta</h2>
            <span>Sig in with your e-mail and password</span>
       
        
        <form onSubmit={this.handleSubmit}>
            <input className='email' type='email' value={this.state.email} onChange={this.handleChange} required></input>
            <label>e-mail</label>
            <input className='password' type='password' value={this.state.password} onChange={this.handleChange} required></input>
            <label>password</label>

            <input className='submit' type='submit' value='submit form'/>

        </form>
        </div>
    )
}
}

export default SignIn;
