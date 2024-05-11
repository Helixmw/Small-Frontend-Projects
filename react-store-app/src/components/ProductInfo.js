import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import './css/ProductInfo.css'
import ShoppingCart from '../assets/icons/cart-outline.svg'
const ProductInfo = () => {

    const url = "https://fakestoreapi.com/products";

    const { id } = useParams();

    const {data, isPending, error} = useFetch(`${url}/${id}`)

    return (
        <div className="product-info">
        {isPending && <div className="loading" style={{textAlign: "center", 
          fontFamily:"var(--cool)",
        }}>Loading...</div>}
        {error && <div className="loading" style={{textAlign: "center", 
          fontFamily:"var(--cool)",
        }}>{error}</div>}
        {data && <div className="info">
            <div className="imagebox2">
                <img src={data.image} alt="" className="image" />
            </div>
            <div className="title2">
                {data.title}
            </div>
            <div className="category">
                {data.category}
            </div>
            <div className="price">${data.price}</div>
            <button className="add">
                <img src={ShoppingCart} alt="" className="icon" />
            </button>
            <div className="description">
                {data.description}
            </div>
        </div>
        }
        </div>
        
     );
}
 
export default ProductInfo;