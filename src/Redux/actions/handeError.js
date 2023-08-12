import {Notification} from "../../hooks/useNotification";


const handeError = e =>{
    // console.log(e)
    if(e.response && e.response.data && e.response.data.errors){
        e.response.data.errors.forEach(item =>{
            Notification(item.msg,'warning')
        })
    }else if(e.response && e.response.data && e.response.data.message && !e.response.data.message.startsWith('No') && !e.response.data.message.startsWith('Could not connect')){
        Notification(e.response.data.message,'warning')
    }
}

export default handeError