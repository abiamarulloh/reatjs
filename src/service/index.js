import Get from './get'
import Post from './post'
import Put from './put'
import Delete from './delete'

const getBlog = () => Get("posts?_sort=id&_order=desc")
const postBlog = (data) => Post("posts", data)
const putBlog = (blogId, blog) => Put("posts", blogId, blog)
const deleteBlog = (blogId) => Delete("posts", blogId)

const API = {
    getBlog,
    postBlog,
    putBlog,
    deleteBlog
}

export default API;