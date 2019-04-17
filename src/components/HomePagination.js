import React, { Component } from 'react';


class HomePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      articlesPerPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.articleList !== this.props.articleList) {
  //     console.log(this.props.articleList);
  //   }
  // }

  handleClick(event) {
    this.setState({ currentPage: Number(event.target.value) });
  }

  render() {
    // Destructuring
    const { articleList } = this.props;
    console.log(articleList)
    const { currentPage, articlesPerPage } = this.state;

    // Logic for displaying articles
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articleList.slice(indexOfFirstArticle, indexOfLastArticle);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(articleList.length / articlesPerPage); i += 1) {
      pageNumbers.push(i);
    }

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
      <div>
        <ul>{renderPageNumbers}</ul>
      </div>
    );
  }
}

export default HomePagination;
