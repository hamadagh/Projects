import React from 'react'

const ShowPost = ({props}) => {

    const addPost = props.map( (post, index) => {
        
        return(
             
            <div className="post container mt-5" id={index} key={index}>
                <h2>{post.title}</h2>
                <h5>by: {post.userName}</h5>
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
