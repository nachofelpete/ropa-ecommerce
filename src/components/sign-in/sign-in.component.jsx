import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//importamos auth y signInWithGoogle porque el signin lo hacemos con la función
//auth.signInWithEmailAndPassword y con signInWithGoogle. Si queremos más cosas hay que añadirlas.
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
}

handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
         await auth.signInWithEmailAndPassword(email, password);

         //esto devuelve el valor nulo a los campos email y password si funciona el signIn
     this.setState({email: '', password: ''})

    } catch (error) {
        error.code='auth/user-not-found'?

        console.log('usuario no encontrado')
        :
        console.log(error);

    }
    
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
            <span>Sign in with your e-mail and password</span>
       
        
        <form onSubmit={this.handleSubmit}>
            <FormInput 
            name='email' 
            type='email' 
            label='email' 
            value={this.state.email} 
            handleChange={this.handleChange} 
            required/>
            
            <FormInput 
            name='password' 
            type='password' 
            label='password' 
            value={this.state.password} 
            handleChange={this.handleChange} 
            required/>

           <div className='buttons'>
           <CustomButton name='submit' type='submit'> sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> sign in with google </CustomButton>
           </div>
            
        </form>
        </div>
    )
}
}

export default SignIn;
