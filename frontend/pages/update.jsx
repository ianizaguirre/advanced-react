import React, { Component, Fragment } from 'react';
import UpdateItem from '../components/UpdateItem';

// const Update = props => (
//   <Fragment>
//     <UpdateItem id={props.query.id} />
//   </Fragment>
// );

const Update = ({ query: { id } }) => (
  <Fragment>
    <UpdateItem id={id} />
  </Fragment>
);

export default Update;
