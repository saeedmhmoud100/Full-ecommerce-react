import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeUserRole, deleteUser} from "../../Redux/actions/adminUsersAction";


const AdminAllUsersCardHook = userData => {
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)

    const handleChangeUserRole =async _ =>{
        setloading(true)
        await dispatch(changeUserRole(userData._id,{
            role:(userData.role==="user" ? "admin" :"user")
        }))
        setloading(false)
    }

    const handleDeleteUser =async _ =>{
        setDeleteLoading(true)
        await dispatch(deleteUser(userData._id))
        setDeleteLoading(false)
    }



    return [loading,deleteLoading,handleChangeUserRole,handleDeleteUser]
}

export default AdminAllUsersCardHook