import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function wrapPost(post) {
  return <li> {post} </li>
}

const CurrentPosts = (props) => {
  const liPost = props.posts.map(wrapPost)
  return (
    <div>
      <ul>
       {liPost}
      </ul>
    </div>
  )
}

class UserPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postTitle: '',
      postAuthor: '',
      postBody: '',
      posts: []
    }
  }

  handleTitleChange = (event) => {
    this.setState({ postTitle: event.target.value })
  }

  handleAuthorChange = (event) => {
    this.setState({ postAuthor: event.target.value })
  }

  handleBodyChange = (event) => {
    this.setState({ postBody: event.target.value })
  }
  

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState((prevState) => {
      return {
        postTitle: '',
        Title: [ ...prevState.post, prevState.postTitle],
        postAuthor: '',
        Author: [ ...prevState.post, prevState.postAuthor],
        postBody: '',
        Body: [ ...prevState.post, prevState.postBody]
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.postTitle} onChange={this.handleTitleChange} />
          </label>
          <label>
            Author:
            <input type="text" value={this.state.postAuthor} onChange={this.handleAuthorChange} />
          </label>
          <label>
            Body:
            <input type="text" value={this.state.postBody} onChange={this.handleBodyChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <CurrentPosts posts={this.state.posts} />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Audrey",
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.name}'s blog!</h1>
        <h2>Submit your post below:</h2>
        <UserPosts />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();