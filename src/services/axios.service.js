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

let headers = {};
const setHeader = (isStrict, formData = false) => {
    headers = {
        headers: {
            "content-type": "application/json"
        }
    }
}

export const httpPostRequest = (url, data, isStrict = false, formData = false) => {
    setHeader(isStrict, formData);
    return axiosInstance.post(url, data, headers)
    // 
}

export const httpGetRequest = (url, isStrict = false) => {
    setHeader(isStrict);
    return axiosInstance.get(url, headers);
}

export const httpPutRequest = (url, data, isStrict = false, formData = false) => {
    setHeader(isStrict, formData)
    return axiosInstance.put(url, data, headers);
}

export const httpPatchRequest = (url, data, isStrict = false, formData = false) => {
    setHeader(isStrict, formData)
    return axiosInstance.put(url, data, headers);
}

export const httpDeleteRequest = (url, isStrict = false) => {
    setHeader(isStrict);
    return axiosInstance.delete(url);
}