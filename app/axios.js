import axios from "axios";


const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const Axios = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('jwt')
    }
})


export default Axios;