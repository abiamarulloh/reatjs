import React from 'react';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return(
        <div className="wrap_thumb">
            <div className="img_thumb">
                {/* eslint-disable-next-line */}
                <img src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                <span className="minute_thumb">{props.minute}</span>
            </div>
            <h3 className="title_thumb">{props.title}</h3>
            <p className="desc_thumb">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    title: "Title here",
    desc: "desc here",
    minute: "00:00",
}

export default YoutubeComp;