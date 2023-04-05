import baseURL from "../Api/baseURL";

const useDeleteData = async (url) => {
    const res = await baseURL.delete(url)
    return res.data
}
export default useDeleteData