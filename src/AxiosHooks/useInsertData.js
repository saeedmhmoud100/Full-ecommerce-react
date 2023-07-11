import baseURL from "../Api/baseURL";

const useInsertData = async (url,params) => {
    const config = { headers: { Authorization:'Bearer '+ localStorage.getItem('token') }}
    const res = await baseURL.post(url,params,config)
    return res.data
}
const useInsertDataWithImage = async (url,formData) => {
    const config={
        headers:{headers: {'Content-Type':"multipart/form-data"},Authorization:'Bearer '+ localStorage.getItem('token')}
    }
    const res = await baseURL.post(url,formData, config)
    return res.data
}

export {useInsertData,useInsertDataWithImage}