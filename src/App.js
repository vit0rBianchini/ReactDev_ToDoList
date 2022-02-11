import React, { useState } from 'react';

import '../src/assets/css/Style.css';
import EntradaDeDados from './components/EntradaDeDados/EntradaDeDados';
import QuadroDeRecados from './components/QuadroDeRecados/QuadroDeRecados';

function App() {
    const [valorInput, setValorInput] = useState('') //Isso é um hook
    const [valorTextArea, setValorTextArea] = useState('');
    const [categoria, setCategoria] = useState('');
    const [listaNotas, setListaNotas] = useState([]);
    const [listaCategoria, setListaCategoria] = useState([])

    function inputChange(e){
        setValorInput(e.target.value)
    }

    function valueCategoriaChange(e){
        setCategoria(e.target.value)
        
    }

    function deletaCategoria(el){
        const novaLista = []
        listaCategoria.map(e => {
            if(e === null){ return null }
            if(e.key !== el.target.value){
                novaLista.push(e)
                return null
            }

            return null
        })
        setListaCategoria(novaLista)
    }

    function valorTextAreaChange(e){
        if (e.target.value.length <= 150) {
            return setValorTextArea(e.target.value)
        } else {
            return valorTextArea
        }
    }

    function listaCategoriaChange(e){
        let categoria = <option key={e.target.value} value={e.target.value}>{e.target.value}</option>
        listaCategoria.map(el => {
            if(el === null){
                return null
            } else if(listaCategoria.length === 0){
                categoria = <option key={e.target.value} value={e.target.value}>{e.target.value}</option>
            } else if( el.key === e.target.value){
                categoria = null
            } else {
                categoria = <option key={e.target.value} value={e.target.value}>{e.target.value}</option>
            }
            return null
        })

            
        setListaCategoria([...listaCategoria, categoria])
        setCategoria(e.target.value)
            
    }

    function atulizarLista(){
        setListaNotas([...listaNotas, { titulo: valorInput, categoria: categoria, texto: valorTextArea, key: Math.floor(Math.random() * 10000000).toString() + valorInput }])
    }

    function deletarItemLista(e){
        const novaLista = []
        const elementoParaSerDeletado = e.target.value
        listaNotas.map(e => {
            if (e.key !== elementoParaSerDeletado) {
                novaLista.push(e)
                return null
            } else {
                return null
            }
        })
        setListaNotas(novaLista)
    }
    
    return (
        <div className='main'>
            <EntradaDeDados
                value={valorInput}
                valorInputChange={inputChange}
                valueCategoria={categoria}
                valorTextArea={valorTextArea}
                valueCategoriaChange={valueCategoriaChange}
                valorTextAreaChange={valorTextAreaChange}
                enviarFunction={atulizarLista}

                listaCategoria={listaCategoria}
                setListaCategoria={listaCategoriaChange}

                deletaCategoria={deletaCategoria}
            />
            <QuadroDeRecados
                deletarItemLista={deletarItemLista}
                elemento={listaNotas}
                categorias={listaCategoria}
            />
        </div>
    );
}

export default App;
