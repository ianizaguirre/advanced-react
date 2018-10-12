import React, { Component, Fragment } from 'react';

class Page extends Component {
  render() {
    return (
      <Fragment>
        <p> Heyyy I am the page Component</p>
        {this.props.children}
      </Fragment>
    );
  }
}

export default Page;
