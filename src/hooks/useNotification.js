import {toast} from "react-toastify";
export const Notification = (msg='',type='success') => toast[type](msg);