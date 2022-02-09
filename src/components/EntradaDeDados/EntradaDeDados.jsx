import React from 'react';


function CategoriaInputs(props) {
    function inputChange(e){
        if(e.key === 'Enter'){
            props.setListaCategoria(e)   
        }
    }

    return (
        <div className='entradaDados_categoria'>
            <input
                className='entradaDados_categoriaNova' 
                placeholder='Nova categoria' 
                onKeyPress={inputChange}
            />
            <select
                className='entradaDados_select'
                value={props.valueCategoria} 
                onChange={props.valueCategoriaChange}
            >
                <option key={'vazio'} value={''}>{'Sem categoria'}</option>
               {props.listaCategoria}
            </select>
        </div>
    )
}

function EntradaDeDados(props){
    return(
        <div className='entradaDados'>
            <input 
                className='entradaDados_titulo'
                value={props.value}
                placeholder='Titulo do lembrete' 
                onChange={props.valorInputChange}
            />
            <CategoriaInputs 
                valueCategoria={props.valueCategoria}
                valueCategoriaChange={props.valueCategoriaChange}
                listaCategoria={props.listaCategoria}
                setListaCategoria={props.setListaCategoria}
            />
            <div className='entradaDados_TextArea'>
                <textarea 
                    rows="10" 
                    placeholder='Escreva seu lembrete' 
                    onChange={props.valorTextAreaChange} 
                    value={props.valorTextArea}>
                </textarea>
                {props.valorTextArea.length >= 130 ? <p className='textArea_contador red'>{props.valorTextArea.length}/150</p> : <p className='textArea_contador'>{props.valorTextArea.length}/150</p>}
            </div>
            <button className='btn_enviar' onClick={props.enviarFunction}>Enviar</button>
            <p className='entradaDados_orientacoes'>Orientações: Para criar uma nova categoria escreva o nome dela e precione a tecla 'enter'</p>
        </div>
    )
}

export default EntradaDeDados