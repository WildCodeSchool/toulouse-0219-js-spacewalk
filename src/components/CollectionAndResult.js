import React, { Component } from 'react';
import Collections from './collections';
import { Badge, Button } from 'reactstrap';
import HomePagination from './HomePagination';
import './collections.css';
import Title from './title';
import './articleHome.css';
import colorTag from '../functions/colorTag';


// import des img des collections
import science from './images/scienceCollection.jpeg';
import photo from './images/photoCollection.jpeg';
import hubble from './images/hubbleCollection.png';
import exoplanet from './images/exoplanetCollection.jpeg';
import excerptDate from '../functions/excerptDate';

class CollectionAndResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      tagName: "",
      tag: [
        {
          name: "Science",
          url: science,
        },
        {
          name: "Photo",
          url: photo,
        },
        {
          name: "Hubble",
          url: hubble,
        },
        {
          name: "exoplanet",
          url: exoplanet,
        }
      ],
      pageOfArticles: []
    };

    // Binding method
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    fetch("https://hubblesite.wild31.com/api/v3/external_feed/esa_feed?page=all", {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          article: data
        });
      });
    this.handleTag = this.handleTag.bind(this);
  }
  handleTag = tag => this.setState({ tagName: tag });

  onChangePage(newSetOfArticles) {
    // Updating page with new page of articles
    this.setState({ pageOfArticles: newSetOfArticles });
  }

  render() {
    const filteredArticleList = this.state.article
      .filter(
        singleArt =>
          this.state.tagName === "" ||
          singleArt.title.includes(this.state.tagName)
      );

    return (
      <section>
        <Title title="Collections" idStyle="title" />
        <div className="container-fluid mx-auto">
          <div id="collections">
            {this.state.tag.map((tag, index) => (


              <Collections
                key={index}
                url={tag.url}
                name={tag.name}
                handleTag={this.handleTag}
                i={index}
              />


            ))}
          </div>
          <div>
            <HomePagination articleList={filteredArticleList} onChangePage={this.onChangePage} />
          </div>
          <div className="row mx-auto">
            {this.state.article
              .filter(
                singleArt =>
                  this.state.tagName === "" ||
                  singleArt.title.includes(this.state.tagName)
              )
              .map((singleArt, index) => (

                <div key={index} className="articleHome">
                  <img
                    src={singleArt.image}
                    alt={singleArt.title}
                  />
                  <div>
                    {this.state.tag
                      .filter(SingleTag => singleArt.title.includes(SingleTag.name))
                      .map(SingleTag => (
                        <p
                          style={{
                            backgroundColor: colorTag(SingleTag.name),
                            color: "#ffffff"
                          }}
                          type="button"
                          className="badge mr-1"
                          onClick={() => this.handleTag(SingleTag.name)}
                        >{SingleTag.name}</p>
                      ))}
                    <p className="date">
                      {excerptDate(singleArt.pub_date)}
                    </p>
                    <h2>{singleArt.title}</h2>
                    {/* <p>
                      {excerpt(singleArt.description, 10)}
                    </p> */}
                    <a href={singleArt.link}>
                      <Button
                        color="dark"
                        className="btn-sm"
                        outline>
                        Read more ⇢
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section >
    );
  }
}

export default CollectionAndResult;