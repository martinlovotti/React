import './ItemCount.css';
import React, { Component, useState} from 'react';

function Card(props){
    const MaxMin = [1,4]
    const [contador, setContador] = useState(1)
    return(
        <div className="card">
            <img src={props.href} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.tittle}</h5>
                <div className='buttonContainer'> 
                    <button disabled={contador<MaxMin[0]} onClick={ ()=> {setContador(contador - 1)}}> - </button>
                    <p>{contador}</p>
                    <button disabled={contador>MaxMin[1]} onClick={ ()=> {setContador(contador + 1)}}> + </button>
                </div>
            </div>
        </div>
    )
}

function ItemCount(){
    
    return(
    <div className='cards-container'>
        <Card href="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw66da801b/products/AD_HB9215/AD_HB9215-1.JPG" tittle="Camiseta Titular Argentina"/>
        <Card href="https://http2.mlstatic.com/D_NQ_NP_711100-MLA50473515851_062022-O.webp" tittle="Camiseta Uruguay Titular"/>
    </div>
    )
}

export default ItemCount;