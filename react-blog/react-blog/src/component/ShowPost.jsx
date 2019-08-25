import React from 'react'

const ShowPost = ({props}) => {

    const addPost = props.map( (post, index) => {
        return(
             
            <div className="post container mt-5 shadow p-3 mb-5 bg-white rounded" id={index} key={index}>
                <h2>{post.title}</h2>
                <h5>by: <span className="username">{post.userName}</span></h5>
                <p>{post.textArea}</p>
            </div>
        )
    })

    

        return (
            <div className="post-list">
                {addPost}
            </div>
        )
    
}

export default ShowPost
