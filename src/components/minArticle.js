import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
import ApiTest from '../tableTest_article';
import './minArticle.css';


// card faite avec un object test, les props seront à modifier.
class MinArticle extends Component {
  constructor(props) {
    super(props);
    this.image = ApiTest.hdurl;
    this.title = ApiTest.title;
    this.explanation = ApiTest.explanation;
    this.copyright = ApiTest.copyright;
    this.date = ApiTest.date;
    this.state = {};
  }


  // fonction pour couper la description dans la card.
  excerpt = (string) => {
    for (let i = 150; i < string.length; i++) {
      if (string[i] === ' ') {
        return `${string.slice(0, i)}...`;
      }
    }
    return `${string.slice(0, 150)}...`;
  };


  render() {
    return (
      <div>

        <Card>
          <CardImg
            className="minArticleImage"
            src={this.image}
            alt="Card image cap"
          />
          <CardBody className="cardBody">
            <CardTitle><h2>{this.title}</h2></CardTitle>
            <CardSubtitle className="dateName">On {this.date} by {this.copyright}</CardSubtitle>
            <CardText>
              {this.excerpt(this.explanation)}
              <a href="#"> Continue reading</a>
            </CardText>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default MinArticle;
