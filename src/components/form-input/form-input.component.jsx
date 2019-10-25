import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherInputProps}) => (
    <div className='group'>
        
        <input className='form-input' onChange={handleChange} {...otherInputProps}/>
        {
            //si el desarrollador quiere pasar una etiqueta, entonces la creamos
            label?
            (<label className={`${otherInputProps.value.length? 'shirnk':''} form-input-label`}>
                {label}
            </label>)
            :""
        }


    </div>
);

export default FormInput;