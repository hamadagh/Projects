import React, { Component } from 'react'

export class CreatePost extends Component {
    state = {
        Title: undefined,
        username: undefined,
        textArea: undefined,
    }

    render() {
        const createPost = () => {
            
        }
        return (
            <div className='container-fluid text-center'>
                <h2 className="mt-5 mb-4">Create a Post</h2>
                <form>
                    <fieldset>
                      <input type="text" className='row col-lg-4 col-md-8 col-sm-8 col-xs-10 mx-auto mb-4'/>
                      <input type="text" className='row col-lg-4 col-md-8 col-sm-8 col-xs-10 mx-auto mb-4'/>
                      <textarea className='row col-lg-4 col-md-8 col-sm-8 col-xs-10 mx-auto mb-4' id="textarea"></textarea>
                      <div className="row justify-content-center">
                      <button type="button" className="row btn btn-dark col-3">Post</button>
                      </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default CreatePost
