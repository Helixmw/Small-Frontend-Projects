import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if(res.ok){
                    return res.json();
                }else{
                    throw Error("Could not get products");
                }
            }).then((data) => {
                setData(data);
                setPending(false);
                setError(null);
            }).catch((err) => {
                setPending(false);
                setError(err.message);
            });
    },[url]);

    return { data, isPending, error }

}
 
export default useFetch;