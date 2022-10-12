import { useState } from 'react';
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"
import { useContext } from 'react';                     //TRABAJANDO EN ACTIVIDAD 5
import { CartContext } from '../context/CartContext';   //TRABAJANDO EN ACTIVIDAD 5

const ItemDetail = ({ item }) => {

    const { addToCart } = useContext( CartContext ) //TRABAJANDO EN ACTIVIDAD 5

    const [add, setAdd] = useState(false)

    function onAdd(cantidad) {
        console.log('Hiciste onAdd ' + cantidad);
        addToCart(cantidad) //TRABAJANDO EN ACTIVIDAD 5
        console.log(addToCart);
        setAdd(true)
    }

    return (
        <>
            <div className="container-fluid justify-content-center flex">
                <div className="card card-compact w-96 bg-base-100 shadow-xl flex-row">
                    <figure><img src={item.pictureUrl} alt='imagen de producto' /></figure>
                    <div className="card-body text-white align-items-center">
                        <h2 className="card-title">{item.name}</h2>
                        <p>Valor: ${item.price}</p>

                        {add ? <Link to={`/cart`}>IR A CART</Link> : <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>}

                        <Link to={`/producto/category/${item.category}`}>Ver por CATEGORIA</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail