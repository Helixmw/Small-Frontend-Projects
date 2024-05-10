
import Item from './components/Item'
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const url = "https://fakestoreapi.com";
  const c = console.log.bind();

  const GetData = () => {
    fetch(`${url}/products`)
          .then((res)=>{
            if(res.ok){
              return res.json();
            }else{
              throw Error("Something went wrong.")
            }
          }).then((data) => {
            setProduct(data);
            setLoading(false);
          }).catch((err) => {
            c(err.message);
          });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <div className="items">
          {isLoading && <div className="loading" style={{textAlign: "center", 
            fontFamily:"var(--cool)",
          }}>Loading...</div>}

        {products && products.map((product) => (
          <Item product={product} key={product.id}/>
        ))}

        </div>
      </div>
    </div>
  );
}

export default App;
