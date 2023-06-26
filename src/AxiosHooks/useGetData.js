import baseURL from "../Api/baseURL";

const useGetData = async (url,token) => {
    const config = { headers: { Authorization:'Bearer '+ token }}
    const res = await baseURL.get(url,config)
    return res.data
}
export default useGetData