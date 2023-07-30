import {Notification} from "../../hooks/useNotification";


const handeError = e =>{
    if(e.response && e.response.data && e.response.data.errors){
        e.response.data.errors.forEach(item =>{
            Notification(item.msg,'warning')
        })
    }else if(e.response && e.response.data && e.response.data.message){
        Notification(e.response.data.message,'warning')
    }
}

export default handeError