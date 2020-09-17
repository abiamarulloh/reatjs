import React, {Fragment, Component} from 'react'
import Post from '../../../components/Post/Post'
import './BlogPost.css'
import API from '../../../service'

class BlogPost extends Component {
    state = {
        posts: [],
        formBlogPost: {
            id: new Date().getTime(),
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: false
    }

    getPostAPI = () => {
        API.getBlog().then(posts => {
            this.setState({posts})
        })
    }

    handleRemove = (data) => {
        API.deleteBlog(data).then(res => {
            this.getPostAPI()
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPost = {...this.state.formBlogPost}
        let timestamp = new Date().getTime()

        if(!this.state.isUpdate) {
            formBlogPost["id"] = timestamp
        }

        formBlogPost[event.target.name] = event.target.value
        this.setState({
            formBlogPost
        })
        
    }

    postDataToAPI = () => {
        const data = this.state.formBlogPost
        API.postBlog(data).then(() => {this.getPostAPI()})
    }

    putDataToAPI = () => {
        const blogId = this.state.formBlogPost.id
        const blog = this.state.formBlogPost
        API.putBlog(blogId, blog).then(() => {this.getPostAPI()})
    }

    handleEmptyForm = () => {
        let formBlogPost = {...this.state.formBlogPost}
        formBlogPost['title'] = ""
        formBlogPost['body'] = ""
        this.setState({
            formBlogPost
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.putDataToAPI()
        }else {
            this.postDataToAPI()
        }
        this.handleEmptyForm()
    }

    handleDetail = (id) => {
        this.props.history.push(`detail-post/${id}`)
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        return(
            <Fragment>
                <div className="form-add-post">
                    <h2>Add Post</h2>
                    <hr/>
                    <br/>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" id="title" onChange={this.handleFormChange} />
                    <label htmlFor="body-content">Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body-content" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Add Post</button>
                </div>

                {this.state.posts.map((post) => 
                    <Post 
                    key={post.id}
                    data={post}
                    remove={this.handleRemove}
                    update={this.handleUpdate}
                    detail={this.handleDetail}/>
                )}
            </Fragment>
        )
    }
}

export default BlogPost;