import React, { Component, Fragment } from 'react';
import Header from './Header';

class Page extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.props.children}
      </Fragment>
    );
  }
}

export default Page;
