import {useEffect, useState} from 'react'
import {Notification} from "../useNotification";

const OrderPayCashHook= _  =>{
    const [address,setAddress] = useState({})

    const handleOnClick = _=>{
        if(address == 0)
            Notification('Please select an address','warning')
        console.log(address)

    }

    useEffect(_=>{

    },[])

    return [setAddress,handleOnClick]
}

export default OrderPayCashHook