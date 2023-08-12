import {useEffect, useState} from "react";


const OfflineHook =_=>{
    // Online state
    const [isOnline, setIsOnline] = useState(true);

    useEffect(_=>{
        const run =async _=>{
            try {
            const res =await fetch('https://jsonplaceholder.typicode.com/users')
                console.log(res)
                setIsOnline(res.status >= 200 && res.status <= 300)
            }catch (e){
                setIsOnline(false)
            }
        }
        run()
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

    console.log(isOnline)

    return [isOnline===true]
}

export default OfflineHook