import React, { Component } from 'react';
import './articleHome.css';


class ArticleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="articleHome">
        <img
          src='https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/06/Asteroid-Mining-796x447.jpg'
          alt='img test'
        />

      </div>
    );
  }
}

export default ArticleHome;
