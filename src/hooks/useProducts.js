import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const localhostUrl = `http://localhost:5000/products`;
        // const serverUrl = `https://serene-brook-28678.herokuapp.com/products`;
        fetch(localhostUrl)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];
}

export default useProducts;