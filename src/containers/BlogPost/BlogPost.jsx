import React, {Component, Fragment} from 'react'
import Post from '../../components/Post/Post'
import axios from 'axios'

class BlogPost extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         posts: json
        //     })
        // })

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            const posts = res.data
            this.setState({posts})
        })
    }
    
    render(){
        return(
            <Fragment>
                {this.state.posts.map((post) => 
                    <Post title={post.title} body={post.body} />
                )}
            </Fragment>
        )
    }
}

export default BlogPost;