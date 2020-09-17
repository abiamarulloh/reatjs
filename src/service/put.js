import Axios from 'axios'
import {RootAPI} from './config'

const Put = (path, blogId, blog) => {
    const promise = new Promise((resolve, reject) => {
        Axios.put(`${RootAPI}/${path}/` + blogId, blog)
        .then(res => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
    return promise;
}

export default Put;