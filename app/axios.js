import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const headers = {
    "Content-Type": "application/json",
};

if (typeof window !== "undefined") {
    const token = localStorage.getItem('jwt');
    if (token) {
        headers.Authorization = token;
    }
}

const Axios = axios.create({
    baseURL,
    headers,
});

export default Axios;
