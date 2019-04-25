import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Collections from './collections';
import './collections.css';
import Title from './title';
import './articleHome.css';
import colorTag from '../functions/colorTag';
import excerptDate from '../functions/excerptDate';

// import des img des collections
import science from './images/scienceCollection.jpeg';
import photo from './images/photoCollection.jpeg';
import hubble from './images/hubbleCollection.png';
import exoplanet from './images/exoplanetCollection.jpeg';


class CollectionAndResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      tagName: '',
      tag: [
        {
          name: 'Science',
          url: science,
        },
        {
          name: 'Photo',
          url: photo,
        },
        {
          name: 'Hubble',
          url: hubble,
        },
        {
          name: 'exoplanet',
          url: exoplanet,
        }
      ],
      currentPage: 1,
      articlesPerPage: 6,
      isFiltered: true
    };

    // Binding methods
    this.handleTag = this.handleTag.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleResetFilter = this.handleResetFilter.bind(this);
  }

  componentDidMount() {
    fetch('https://hubblesite.wild31.com/api/v3/external_feed/esa_feed?page=all', {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          article: data,
        });
      });
  }

  handleTag(tag) {
    this.setState({
      tagName: tag,
      currentPage: 1,
      isFiltered: true
    });
  }

  handleClick(event) {
    this.setState({ currentPage: Number(event.target.value) });
  }

  handleResetFilter() {
    this.setState(prevState => ({
      isFiltered: !prevState.isFiltered
    }));
  }

  render() {
    // Destructuring
    const {
      article,
      currentPage,
      articlesPerPage,
      tagName,
      tag,
      isFiltered
    } = this.state;

    // Woking with filtered articles in order to display a reliable number of pages
    let filteredArticles = article
      .filter(
        singleArt => tagName === '' || singleArt.title.includes(tagName)
      );
    // Working with all articles when reset filter
    if (!isFiltered) {
      filteredArticles = article;
    }

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
          className={`paginate-page ${number === currentPage ? 'active' : ''}`}
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
            {tag.map((singleTag, index) => (

              <Collections
                key={index}
                url={singleTag.url}
                name={singleTag.name}
                handleTag={this.handleTag}
                i={index}
              />

            ))}
          </div>

          <div className="row mx-auto">
            {currentArticles.map((singleArt, index) => (

              <div key={index} className="articleHome">
                <img
                  src={singleArt.image}
                  alt={singleArt.title}
                />
                <div>
                  {tag
                    .filter(SingleTag => singleArt.title.includes(SingleTag.name))
                    .map(SingleTag => (
                      <p
                        style={{
                          backgroundColor: colorTag(SingleTag.name),
                          color: '#ffffff'
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
                      outline
                    >
                      Read more ⇢
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div>
          <ul className="paginate-container">
            <span className="paginate-text">Page :</span>
            {renderPageNumbers}
            <li
              className="paginate-reset"
              onClick={this.handleResetFilter}
            >
              Display all
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default CollectionAndResult;
