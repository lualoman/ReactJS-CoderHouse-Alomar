import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

    const {totalProductsQty, totalProductsPrice} = useContext(CartContext)

    const styles = {
        color: 'white',
    }

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                <div className="dropdown">
                        <label tabIndex={0} className="btn btn-light btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <CartWidget />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between nav-link" style={styles} to='/'>
                                    Inicio
                                </Link>
                            </li>
                            <li tabIndex={0}></li>
                            <li><Link className="nav-link" style={styles} to='/'>Productos</Link></li>
                            <li><Link className="nav-link" style={styles} to='/producto/category'>Categorias
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </Link>
                                <ul className="p-2 bg-base-100">
                                    <li><Link style={styles} to={`/producto/category/Iluminacion`}>Iluminacion</Link></li>
                                    <li><Link style={styles} to={`/producto/category/Computadoras`}>Computadoras</Link></li>
                                    <li><Link style={styles} to={`/producto/category/Mouse`}>Mouse</Link></li>
                                    <li><Link style={styles} to={`/producto/category/Sonido`}>Sonido</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link" style={styles} to='/'>Contacto</Link></li>
                        </ul>
                        </div>

                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} style={styles} className="btn btn-light btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="2 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge-light badge-sm indicator-item">{totalProductsQty()}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span style={styles} className="font-bold text-lg" >{totalProductsQty()} Productos</span>
                                <span className="text-info">Total: $ {totalProductsPrice()} </span>
                                <div className="card-actions">
                                <Link to='/cart' className="btn btn-primary btn-block">Mi carrito</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                    <Link className="btn btn-light normal-case text-xl ml-5" to='/'>TecShop</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar