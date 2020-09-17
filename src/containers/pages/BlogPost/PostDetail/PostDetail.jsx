import React, { Component, Fragment } from 'react'
import './PostDetail.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


class PostDetail extends Component {
    state = {
        title: "",
        body: ""
    }

    handleDetailPost = () => {
        let id = this.props.match.params.postID
        axios.get(`http://localhost:3004/posts/${id}`)
        .then( res => {
            this.setState({
                title: res.data.title,
                body: res.data.body
            })
        })
    }

    componentDidMount() {
        this.handleDetailPost()
    }

    render() {
        return(
            <Fragment>
                <div className="wrap">
                    <h3>Detail Post </h3>
                    <hr/>
                    <h1>{this.state.title}</h1>
                    <br/>
                    <p>{this.state.body}</p>
                    <div>
                        <Link to="/">Kembali</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PostDetail;