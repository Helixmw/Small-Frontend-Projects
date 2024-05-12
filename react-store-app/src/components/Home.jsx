import useFetch from '../hooks/useFetch';
import Item from './Item';

const Home = () => {
    const url = "https://fakestoreapi.com";
    const {data, isPending, error } = useFetch(`${url}/products`);

    return ( 
        <div className="items">
        {isPending && <div className="loading" style={{textAlign: "center", 
          fontFamily:"var(--cool)",
        }}>Loading...</div>}
        {error && <div className="loading" style={{textAlign: "center", 
          fontFamily:"var(--cool)",
        }}>{error}</div>}
      {data && data.map((product) => (
        <Item product={product} key={product.id}/>
      ))}

      </div>
     );
}
 
export default Home;