import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
import './articleHome.css';
import excerpt from '../functions/excerpt';


class ArticleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="articleHome">
        <img
          src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/06/Asteroid-Mining-796x447.jpg"
          alt="img test"
        />
        <div>
          <Badge color="success">Tags</Badge>
          <p className="date">
            48-03-2034
          </p>
          <h2>Title</h2>
          <p>
            {excerpt('ici, l\'appel de l\'api pour le text (couper à 100 lettres.)', 100)}
          </p>
          <a href="#">
            <Button color="dark" outline>
              Read more ⇢
          </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default ArticleHome;
