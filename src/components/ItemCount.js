import './ItemCount.css';
import React, { Component, useState} from 'react';
function ItemCount(){
    const [contador, setContador] = useState(1)
    return(
        <div className="card">
            <img src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw66da801b/products/AD_HB9215/AD_HB9215-1.JPG" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Camiseta Titular Selección Argentina</h5>
                <div className='buttonContainer'> 
                    <button disabled={contador<1} onClick={ ()=> {setContador(contador - 1)}}> - </button>
                    <p>{contador}</p>
                    <button disabled={contador>4} onClick={ ()=> {setContador(contador + 1)}}> + </button>
                </div>
            </div>
        </div>
    )
    
}

export default ItemCount;