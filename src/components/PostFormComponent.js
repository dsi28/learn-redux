import React, { Component } from 'react'

class PostForm extends Component {
    state = {
        title: '',
        body: '',
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
        .then(data => console.log(data));
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={(e) => this.onSubmitHandler(e)}>
                    <div>
                        <label htmlFor="title">Title</label><br/>
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            onChange={(e) => this.onChangeHandler(e)}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="body">Body</label><br/>
                        <textarea 
                            type="text" 
                            name="body" 
                            value={this.state.body}
                            onChange={(e) => this.onChangeHandler(e)}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default PostForm;