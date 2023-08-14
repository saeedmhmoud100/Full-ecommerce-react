import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../Redux/actions/adminUsersAction";


const AdminAllUsersHook = _ => {
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false)
    const allUsersData = useSelector(state => state.users.allUsers)
    const allUsersDataChange = useSelector(state => state.users.change)

    useEffect(_=>{
        const run =_=>{
            setloading(true)
            dispatch(getAllUsers())
            setloading(false)
        }
        run()
    },[allUsersDataChange])

    // console.log(allUsersData)
    return [allUsersData,loading]
}

export default AdminAllUsersHook