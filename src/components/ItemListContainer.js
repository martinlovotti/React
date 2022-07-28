import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import './ItemListContainer.css'
import products from "../utils/products.mock"


const ItemListContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { // Respuesta OK
                //console.log("Productos: ", res)
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llama fallo")
            })
            .finally( () => { // Siempre que termina por OK o Fallo
            //setSpinner(false) 
            })
    }, [])




    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer