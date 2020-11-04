import axios from "axios"
const proxyURL="https://rocky-plateau-66771.herokuapp.com/"
const baseAddr="http://www.i2ce.in"
export default axios.create({
    baseURL:`${proxyURL}${baseAddr}`
})