import React from 'react';
import {Input, Label, GroupInput, LeyendaError, IconoValidacion} from '../elements/signup';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponentInput = (props) =>{
    const { state, setState, label,placeholder, type ,name, leyendaError, expresionRegular, funcion} = props;
    const onChange = (e) => {
		setState({...state, campo: e.target.value});
        
	}

    const validacion = ()=> {
        if(expresionRegular){
			if(expresionRegular.test(state.campo)){
				setState({...state, valido: 'true'});
                
			} else {
				setState({...state, valido: 'false'});
                
			}
        }
        if(funcion){
            funcion();  
        } 
    }
    

    return(
        <div>
            <Label htmlFor={name} valido={state.valido}>{label}</Label>
                <GroupInput>
                    <Input 
                        
                        type={type} 
                        id={name}   
                        placeholder={placeholder}
                        value={state.campo}
                        onChange={onChange} 
                        onKeyUp={validacion}
                        onBlur={validacion}
                        valido={state.valido}
                        />
                    <IconoValidacion 
                        icon ={ state.valido === 'true' ? faCheckCircle: faTimesCircle} 
                        valido={state.valido}
                    />
                </GroupInput>
            <LeyendaError valido={state.valido}>{leyendaError}</LeyendaError>
        </div>
    )
}

export default ComponentInput;