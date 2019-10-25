import React from 'react';

import './custom-button.styles.scss';

//añadimos dinámicamente una clase, utilizando la propiedad isGoogleSignIn
//que tendremos que incluir en nuestro botón si queremos añadir la clase google-sign-in
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;