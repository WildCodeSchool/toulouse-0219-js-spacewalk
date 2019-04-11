import React, { Component } from 'react';
import Collections from './collections';
import { Badge, Button } from 'reactstrap';

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
      ]
    };
  }

  componentDidMount() {
    fetch("https://hubblesite.wild31.com/api/v3/external_feed/esa_feed", {
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


  render() {
    return (
      <section>
        <div className="container-fluid mx-auto">
          {this.state.tag.map((tag) => (
            <div>
              <Collections url={tag.url} name={tag.name} />
            </div>
          ))}
          <div className="row mx-auto">
            {this.state.article
              .filter(
                singleArt =>
                  this.state.tagName === "" ||
                  singleArt.title.includes(this.state.tagName)
              )
              .map(singleArt => (

                <div id="articleHome">
                  <img
                    src={singleArt.image}
                    alt={singleArt.title}
                  />
                  <div>
                    <Badge color="success">Tags</Badge>
                    <p className="date">
                      {singleArt.pub_date}
                    </p>
                    <h2>{singleArt.title}</h2>
                    {/* <p>
                      {excerpt(singleArt.description, 10)}
                    </p> */}
                    <a href={singleArt.link}>
                      <Button color="dark" outline>
                        Read more ⇢
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CollectionAndResult;