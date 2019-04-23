import React, { Component } from 'react';
import Collections from './collections';
import { Badge, Button } from 'reactstrap';
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

const pageNbrStyle = {
  display: "flex",
  color: "blue",
  userSelect: "none",
  cursor: "pointer",
  listStyleType: "none"
}

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
      currentPage: 1,
      articlesPerPage: 6
    };

    // Binding method
    this.handleClick = this.handleClick.bind(this);
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
  handleTag = tag => this.setState({
    tagName: tag,
    currentPage: 1
  });

  handleClick(event) {
    this.setState({ currentPage: Number(event.target.value) });
  }

  render() {
    // Destructuring
    const { article, currentPage, articlesPerPage } = this.state;

    // Woking with filtered articles in order to display a reliable number of pages
    const filteredArticles = article
      .filter(
        singleArt =>
          this.state.tagName === "" ||
          singleArt.title.includes(this.state.tagName)
      );

    // Logic for displaying articles
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredArticles.length / articlesPerPage); i += 1) {
      pageNumbers.push(i);
    }

    // Display pages
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          value={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });



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
            <ul style={pageNbrStyle}>{renderPageNumbers}</ul>
          </div>
          <div className="row mx-auto">
            {/* {currentArticles
              .filter(
                singleArt =>
                  this.state.tagName === "" ||
                  singleArt.title.includes(this.state.tagName)
              ) */}
            {currentArticles.map((singleArt, index) => (

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