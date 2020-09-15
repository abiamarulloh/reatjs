import React from 'react'
import './Post.css'

export default function Post(props) {
    return (
        <div className="wrap-post">
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/190/200/tech" alt="dummy"/>
                </div>
                <div className="content">
                    <p className="title">{props.title}</p>
                    <p className="body">{props.body}</p>
                </div>
            </div>
        </div>
    )
}
