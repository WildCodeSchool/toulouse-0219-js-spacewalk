import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Col } from 'reactstrap';
import ApiTest from '../tableTest_article';

class MinArticle extends Component {
  constructor(props) {
    super(props);
    this.image = ApiTest.hdurl;
    this.explanation = ApiTest.explanation;
    this.copyright = ApiTest.copyright;
    this.date = ApiTest.date;
    this.state = {};
  }
  render() {
    return (
      <div>
        <Col lg={4} >
          <Card>
            <CardImg top width="100%" src={this.image} alt="Card image cap" />
            <CardBody>
              <CardTitle></CardTitle>
              <CardSubtitle>{this.date}</CardSubtitle>
              <CardText>{this.explanation}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </div>

    );
  }
}

export default MinArticle;