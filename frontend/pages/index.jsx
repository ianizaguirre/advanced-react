import React, { Component, Fragment } from 'react';
import Link from 'next/link';

const Home = props => (
  <Fragment>
    <p>Hello!!!</p>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
  </Fragment>
);

export default Home;
