import React, { Component } from 'react';
import {
  TwitterTimelineEmbed
}
  from 'react-twitter-embed';

class TwitterTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="centerContent">
        <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="NASA"
            options={{ height: 400 }}
            theme="dark"
          />
        </div>
        <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="esa"
            options={{ height: 400 }}
            theme="dark"
          />
        </div>
      </div>
    );
  }
}

export default TwitterTimeline;