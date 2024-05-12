import './css/Item.css'
import ShoppingCart from '../assets/icons/cart-outline.svg'
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return ( 
        <div className="item">
            <Link className="item-info" to={`/product/${product.id}`}>
 
                <div className="imagebox">
                    <img src={product.image} alt="" className="image" />
                </div>
                <div className="details">
                    <div className="title">{product.title}</div>
                    <div className="category">{product.category}</div>
                    <div className="price">${product.price}</div>
                
                </div>
            </Link>
            <button className="add-to-cart">
                <img src={ShoppingCart} className="button-icon"  alt=""/>
                </button>
        </div>
     );
}
 
export default Item;