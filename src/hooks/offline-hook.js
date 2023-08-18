import {useEffect, useState} from "react";
import BaseURL from "../Api/baseURL";


const OfflineHook =_=>{
    // Online state
    const [isOnline, setIsOnline] = useState(true);
    console.clear()
    useEffect(_=>{
        const run =async _=>{
            try {
                const resProd =await BaseURL.get('/api/v1/products')
                const resCat =await BaseURL.get('/api/v1/categories')
                const resBrand =await BaseURL.get('/api/v1/brands')
                        setIsOnline((resProd.status >= 200 && resProd.status <= 300) &&(resCat.status >= 200 && resCat.status <= 300) &&(resBrand.status >= 200 && resBrand.status <= 300)  )
            }catch (e){
                setIsOnline(false)
            }
        }
        run()
                // console.log(isOnline)
    })

    // useEffect(() => {
    //     // Update network status
    //     const handleStatusChange = (s) => {
    //         setIsOnline(s);
    //     };
    //
    //     // Listen to the online status
    //     window.addEventListener('online', _=>handleStatusChange(true));
    //
    //     // Listen to the offline status
    //     window.addEventListener('offline', _=>handleStatusChange(false));
    //
    //     // Specify how to clean up after this effect for performance improvment
    //     return () => {
    //         window.removeEventListener('online', _=>handleStatusChange(true));
    //         window.removeEventListener('offline', _=>handleStatusChange(false));
    //     };
    // }, [isOnline]);

    // console.log(isOnline)

    return [isOnline]
}

export default OfflineHook