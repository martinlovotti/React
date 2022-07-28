import { useState, useEffect } from 'react'
import './ItemProduct.css'


const ItemProduct = ({data, action}) => {
    const [contador, setContador] = useState(2)

    const {title, image, price, stock} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }
    

    useEffect( () => {
        console.log("Actualizacion")
        // setContador(1)
    }, [contador])

    return(
        <div className="item-product">
            <img src={`${image}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{title}</p>
                <p>{price}</p>
                <div className='countProd'>
                    <button disabled={contador<1} onClick={removeNumber}>-</button>
                    <p>{contador}</p>
                    <button disabled={contador>stock} onClick={addNumber}>+</button>
                </div> 
            </div>
        </div> 
    )
}

export default ItemProduct