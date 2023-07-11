import baseURL from "../Api/baseURL";

const useUpdateData = async (url,params) => {
    const config = { headers: { Authorization:'Bearer '+ localStorage.getItem('token') }}
    const res = await baseURL.put(url,params,config)
    return res.data
}

const useUpdateDataWithImage = async (url,formData) => {
    const config={
        headers:{headers: {'Content-Type':"multipart/form-data"},Authorization:'Bearer '+ localStorage.getItem('token')}
    }
    const res = await baseURL.put(url,formData, config)
    return res
}
export {useUpdateData,useUpdateDataWithImage}