import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3005/api/v1",
    timeout: 30000,
    timeoutErrorMessage: "Server timeout",
    headers: {
        "content-type": "application/json"
    }
})

axiosInstance.interceptors.response.use((response) => {
    if (response.status === 200 || response.status === 201) {
        return response.data;
    } else {
        console.log("Error:", response);
        return response;
    }
})

export const httpPostRequest = (url, data) => {
    return axiosInstance.post(url, data)

}