import Axios from 'axios'
import {RootAPI} from './config'

const Delete = (path, blogId) => {
    const promise = new Promise((resolve, reject) => {
        Axios.delete(`${RootAPI}/${path}/${blogId}`)
        .then(res => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
    return promise;
}

export default Delete;