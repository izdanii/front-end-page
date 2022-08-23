import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchProduct = (id) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `https://63043aca0de3cd918b43b98c.mockapi.io/product/${id}`
                )
                setProduct(response.data)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchProduct()
    }, [])
    return{product}
}