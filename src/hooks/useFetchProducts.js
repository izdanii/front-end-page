import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchProducts= () => {
    const [products, setProducts] = useState([])
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        const FetchProducts = async() => {
            try{
                setLoading(true)
                const response = await axios.get(
                    "https://63043aca0de3cd918b43b98c.mockapi.io/product"
                )
                console.log(response)
                setProducts(response.data)
               } catch (error) {
                console.log("error", error)
               } finally {
                setLoading(false)
               }
        }
      FetchProducts()
   }, [])
   return {products, Loading}
}

