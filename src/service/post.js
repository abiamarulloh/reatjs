import Axios from 'axios'
import {RootAPI} from './config'

// POST API
const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${RootAPI}/${path}`, data)
        .then(res => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
    return promise;
}



export default Post;