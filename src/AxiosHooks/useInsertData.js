import baseURL from "../Api/baseURL";

const useInsertData = async (url,params) => {
    const res = await baseURL.post(url,params)
    return res.data
}
const useInsertDataWithImage = async (url,formData) => {
    const config={
        headers:{headers: {'Content-Type':"multipart/form-data"}}
    }
    const res = await baseURL.post(url,formData, config)
    return res.data
}

export {useInsertData,useInsertDataWithImage}