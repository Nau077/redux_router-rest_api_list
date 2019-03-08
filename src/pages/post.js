import React, { Component } from 'react';
 

class Post extends Component {
  state = {
      post: {},
  }

  async componentDidMount() {
      const id = this.props.match.params.id || '';
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data =  await res.json();
      this.setState({
          post: data
      });
  }


  render() {
      const { post } = this.state;
      const { title, body } = post;

      return (
          <article> 
              <div>
                  <h1>Current Post (выбранный пост с заголовком и содержимым)</h1>  
                  <h2>{title}</h2>
                  <p>{body}</p>
              </div>
          </article>
      );
  }
}

export default Post;