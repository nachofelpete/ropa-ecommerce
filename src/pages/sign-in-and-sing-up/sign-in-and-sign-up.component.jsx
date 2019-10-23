import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss';

//creamos un componente funcional porque las clases las pondremos respectivamente
//en los controladores de sign in y sign-up
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
)

export default SignInAndSignUpPage;