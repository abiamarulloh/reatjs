import Axios from 'axios'
import {RootAPI} from './config'

// GET API
const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${RootAPI}/${path}`)
        .then(res => {
            resolve(res.data)
        }, (err) => {
            reject(err)
        })
    })
    return promise;
}

export default Get;