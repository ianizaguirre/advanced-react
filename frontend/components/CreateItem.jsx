import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import ErrorMessages from './ErrorMessage';

import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(title: $title, description: $description, price: $price, image: $image, largeImage: $largeImage) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  };

  handleChange = event => {
    const { name, type, value } = event.target;
    // console.log({ name, type, value });
    const val = type === 'number' ? parseFloat(value) : value;
    // this.setState({ title: event.target.value });
    // this.setState({ title: val });
    this.setState({ [name]: val });
  };

  handleSubmit = async (newCreatedItem, event) => {
    // Stop the form from submitting
    event.preventDefault();
    // call the mutation
    const response = await newCreatedItem();
    // // console.log(response);
    // re-direct user to the single item page after the item is created
    Router.push({
      pathname: '/item',
      query: { id: response.data.createItem.id }
    });
  };

  handleFileUpload = async event => {
    console.log('uploading file...');
    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    const endpoint = 'successful';
    const response = await fetch(`https://api.cloudinary.com/v1_1/${endpoint}/image/upload`, {
      method: 'POST',
      body: data
    });

    const file = await response.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form onSubmit={this.handleSubmit.bind(this, createItem)}>
            <ErrorMessages error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  required
                  onChange={this.handleFileUpload}
                />
                {this.state.image && <img src={this.state.image} alt="Upload Preview" />}
              </label>

              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="price">
                Price
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  required
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Description
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter A Description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
