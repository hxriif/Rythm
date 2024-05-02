import axios from 'axios'

const Axios = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt")
    }

});


export default Axios;