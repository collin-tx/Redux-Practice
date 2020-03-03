import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  
  componentDidMount(){
    this.props.fetchPosts();
    console.log(this)
  }

  renderList = () => {
    const posts = this.props.posts.data && this.props.posts.data
      .filter((p, i) => i < 10) // only render top 10
      .map((post, index) => {
      return (
        <li key={index * Math.random() * 272857}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      );
    });
    return posts;
  }
  
  render() {
    return (
      <div>
        POST LIST
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return { posts: state.posts}
}

export default connect(mapState, { fetchPosts })(PostList);