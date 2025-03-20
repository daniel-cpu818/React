import axios from 'axios'
import { useState } from "react"

function useFetchApi() {
    const [data, setData] = useState (null)
    const [loading, setLoading] = useState (null)
    const [error, setError] = useState (null)
    
    const request = async (url) => {
        setLoading(true)
        setError(null)
        try{
            const res = await axios.get(url)
            setData(res.data)

        }catch (error){
            setError(error.response?.data?.message || error.message)
        }finally{
            setLoading(false)

        }
    }
    
    
    
    
    
    
    return{data, request, loading, error}
}
export default useFetchApi