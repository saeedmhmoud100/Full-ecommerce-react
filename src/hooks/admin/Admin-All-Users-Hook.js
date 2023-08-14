import {useEffect, useState} from "react";
import avatar from "../../Assets/images/avatar.png";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../Redux/actions/adminUsersAction";


const AdminAllUsersHook = _ => {
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false)
    const allUsersData = useSelector(state => state.users.allUsers)

    useEffect(_=>{
        const run =_=>{
            setloading(true)
            dispatch(getAllUsers())
            setloading(false)
        }
        run()
    })

    console.log(allUsersData)
    return [allUsersData,loading]
}

export default AdminAllUsersHook