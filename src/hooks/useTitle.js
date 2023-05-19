import { useEffect } from "react"

const useTitle = title  =>{
    useEffect(()=>{
        document.title = `${title} - tMarkets`;
    },[title])
} 

export default useTitle