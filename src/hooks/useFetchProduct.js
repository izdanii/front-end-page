import axios from "axios";
import { Loading } from "components/loading/loading";
import { useEffect, useState } from "react";

export const useFetchProduct = (id) => {
    const [product, setProduct] = useState([])
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const response = await axios.get(
                    `https://63043aca0de3cd918b43b98c.mockapi.io/product/${id}`
                )
                setProduct(response.data)
            } catch (error) {
                console.log("error", error)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [])
    return{product, Loading}
}