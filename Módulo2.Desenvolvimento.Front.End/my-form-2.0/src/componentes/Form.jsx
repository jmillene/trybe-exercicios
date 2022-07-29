import React from 'react';

class Form extends React.Component{
    render(){
        return(
        <fieldset>
        <label>Nome
            <input type="text" placeholder='Digite seu nome' maxLength='40' required />
        </label>
        <label>Email
            <input type="email" placeholder='Digite seu email'maxLength='50' required/>
        </label>
        <label>CPF
            <input type="number" placeholder='Digite seu CPF' maxLength='11' required/>
        </label>
        </fieldset>)
    }
}
export default Form;
