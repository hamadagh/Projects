import React from 'react'

const ShowPost = ({props}) => {

    const addPost = props.map( post =>{
        return(
            <div className="post">
                <h2>{post.title}</h2>
                <h5>{post.username}</h5>
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
