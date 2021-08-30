import axios from 'axios'

const request = axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3/",
    params: {
        key : "AIzaSyCNzfjtSEPvmd0xljQhh_QWKe2jHGE7Sn4",
    }

})

export default request