import React, { useState } from 'react';

//Componente | filho
function Card(prop) {
    return (
        <div className='card'>
            <h1 className='card_titulo'>{prop.elemento.titulo}</h1>
            {prop.elemento.categoria === '' ? null : <div className='card_categoria'>{prop.elemento.categoria}</div>}
            <p className='card_conteudo'>{prop.elemento.texto}</p>
            <button className='card_botao' onClick={prop.deletar} value={prop.elemento.key}>Deletar</button>
        </div>
    )
}

//Componente | filho
function Filtro(props) {
    const listaCategoriasTotais = []
    return (
        <select className='entradaDados_select' valorfiltro={props.valorFiltro} onChange={props.setValorFiltro}>
            <option key={'vazio'} value={''}>{'Sem categoria'}</option>
            {props.categorias.map((e, i) => {
                console.log(listaCategoriasTotais.indexOf(e.categoria) === -1)
                if(listaCategoriasTotais.indexOf(e.categoria) === -1){
                    listaCategoriasTotais.push(e.categoria)
                    console.log(listaCategoriasTotais)
                    return <option key={e.categoria} value={e.categoria}>{e.categoria}</option>
                }else{
                    return null
                }
            })}
        </select>
    );
}

//Componete | pai
function QuadroDeRecados(props) {
    const [valorFiltro, setValorFiltro] = useState('');

    function handleValorFiltro(e){
        setValorFiltro(e.target.value)
    }

    function deletar(e){
        props.deletarItemLista(e)
    }

    if (props.elemento.length === 0) {
        return (
            <div className='quadroRecados'>
                <div className='quadro quadroVazio'>
                    <h2 className=''>Você não possui nenhuma anotação</h2>
                </div>
            </div>
        )
    } else if (valorFiltro === '') {
        return (
            <div className='quadroRecados'>
                <Filtro categorias={props.elemento} valorFiltro={valorFiltro} setValorFiltro={handleValorFiltro} />
                <div className='quadro'>
                    {
                        props.elemento.map(e => <Card deletar={deletar} elemento={e} key={e.key} />)
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className='quadroRecados'>
                <Filtro categorias={props.elemento} valorFiltro={valorFiltro} setValorFiltro={handleValorFiltro} />
                <div className='quadro'>
                    {
                        props.elemento.map(e => e.categoria === valorFiltro && <Card deletar={deletar} elemento={e} key={e.key} />)
                    }
                </div>
            </div>
        )
    }



}

export default QuadroDeRecados;
