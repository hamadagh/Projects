import React, { Component } from 'react'

export class CreatePost extends Component {
    state = {
        title: '',
        userName: '',
        textArea: '',
    }
   
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
     this.props.handleStatePost(this.state);
     
    }

    componentDidUpdate
    render() {
            
        
        return (
            <div className='container-fluid text-center'>
                <h2 className="mt-5 mb-4">Create a Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                      <input type="text" className='row col-lg-4 col-md-8 col-sm-8 col-xs-10 mx-auto mb-4' name='title' value={this.state.title} onChange={this.handleChange}/>
                      <input type="text" className='row col-lg-4 col-md-8 col-sm-8 col-xs-10 mx-auto mb-4' name='userName' value={this.state.userName} onChange={this.handleChange}/>
                      <textarea className='row col-lg-4 col-md-8 col-sm-8 col-xs-10 mx-auto mb-4' id="textarea" name='textArea' value={this.state.textArea} onChange={this.handleChange}></textarea>
                      <div className="row justify-content-center">
                      <button type="submit" value="Submit" className="row btn btn-dark col-3" onClick={this.handleSubmit}>Post</button>
                      </div>            
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default CreatePost
