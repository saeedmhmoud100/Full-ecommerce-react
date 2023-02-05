import {toast} from "react-toastify";
export const Notification = (msg,type) => toast[type](msg);