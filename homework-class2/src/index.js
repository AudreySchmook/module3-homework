import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function wrapPost(post) {
  return <li>{post}</li>
}

const CurrentHabits = (props) => {
  const liPosts = props.posts.map(wrapPost)
  return (
    <div>
      <ol>
       {liPosts}
      </ol>
    </div>
  )
}

class UserPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postName: '',
      posts: []
    }
  }

  handleChange = (event) => {
    this.setState({ habitPost: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState((prevState) => {
      return {
        postName: '',
        posts: [ ...prevState.post, prevState.postName]
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.postName} onChange={this.handleChange} />
          </label>
          <label>
            Author:
            <input type="text" value={this.state.postName} onChange={this.handleChange} />
          </label>
          <label>
            Post Content:
            <input type="text" value={this.state.postName} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <CurrentHabits posts={this.state.posts} />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name2: "Fitz"
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.props.name}'s blog!</h1>
        <h2>Submit your post below:</h2>
        <UserPosts />
      </div>
    )
  }
}

ReactDOM.render(<App name="Audrey" />, document.getElementById('root'));
registerServiceWorker();