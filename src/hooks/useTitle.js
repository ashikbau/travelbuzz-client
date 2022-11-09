import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
       document.title = `${title} - TravelBuzz`;
    },[title])
}
export default useTitle;