import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeUserRole} from "../../Redux/actions/adminUsersAction";


const AdminAllUsersCardHook = userData => {
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false)

    const handleChangeUserRole =async _ =>{
        setloading(true)
        await dispatch(changeUserRole(userData._id,{
            role:(userData.role==="user" ? "admin" :"user")
        }))
        setloading(false)
    }

    return [handleChangeUserRole,loading]
}

export default AdminAllUsersCardHook