import baseURL from "../Api/baseURL";

const useUpdateData = async (url,params) => {
    const res = await baseURL.put(url,params)
    return res.data
}

const useUpdateDataWithImage = async (url,formData) => {
    const config={
        headers:{headers: {'Content-Type':"multipart/form-data"}}
    }
    const res = await baseURL.put(url,formData, config)
    return res
}
export {useUpdateData,useUpdateDataWithImage}